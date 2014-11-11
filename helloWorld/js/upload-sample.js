function handleFiles(files) {
	window.URL = window.URL || window.webkitURL;

	if (!files.length) {
		alert("ファイルが選択されていません。");
	} else {
		
		var table = document.getElementById("fileListTable");
		if (table != null) {
			var row = table.rows.length;
			for (var delCount = 0; delCount < row; delCount++) {
				table.deleteRow(0)
			}
		}
		var fileList = document.getElementById('fileList');
		var listTable = document.createElement("table");
		listTable.className = "viewer table table-bordered table-striped table-condensed";
		listTable.id ="fileListTable";
		var tbody = document.createElement("tbody");
		listTable.appendChild(tbody);

		var trhr = document.createElement("tr");
		tbody.appendChild(trhr);

		var th1 = document.createElement("th");
		th1.className = "info";
		trhr.appendChild(th1);
		
		var str1 = document.createTextNode(" ");
		th1.appendChild(str1);
		var th2 = document.createElement("th");
		th2.className = "info";
		trhr.appendChild(th2);
		var str2 = document.createTextNode("ファイル名");
		th2.appendChild(str2);
		var th3 = document.createElement("th");
		th3.className = "info";
		trhr.appendChild(th3);
		var str3 = document.createTextNode("更新日付");
		th3.appendChild(str3);
		var th4 = document.createElement("th");
		th4.className = "info";
		trhr.appendChild(th4);
		var str4 = document.createTextNode("プレビュー");
		th4.appendChild(str4);
		var fileIndex = 0; 
		for (var i = 0; i < files.length; i++) {
			var file = files[i];
			if (!/^image\/(png|jpeg|gif)$/.test(file.type)) {
				continue;
			} else {
				var tr = document.createElement("tr");
				tbody.appendChild(tr);
				var td1 = document.createElement("td");
				tr.appendChild(td1);
				var input = document.createElement('input');
				input.type = "checkbox";
				input.name = "checkUpload";
				td1.appendChild(input);
				var td2 = document.createElement("td");
				tr.appendChild(td2);
				var div1 = document.createElement("div");
				div1.id="fileName" + fileIndex;
				var tdstr1 = document.createTextNode(file.name);
				div1.appendChild(tdstr1);
				td2.appendChild(div1);
				var td3 = document.createElement("td");
				tr.appendChild(td3);
				var tdstr2 = document.createTextNode(dateFormat(file.lastModifiedDate));
				td3.appendChild(tdstr2);
				var td4 = document.createElement("td");
				tr.appendChild(td4);
				var link = document.createElement("a");
				link.href =  window.URL.createObjectURL(file);
				link.rel = "lightbox";
				link.title = file.name;
				var str = document.createTextNode("Preview");
				link.appendChild(str);
				td4.appendChild(link);
				fileIndex++;
			}
		}
		fileList.appendChild(listTable);
		document.getElementById('countFile').value = fileIndex;
		document.getElementById('fileList').style.visibility = "visible";
	}
}
function onClickUpload() {
	if (confirm("アップロードしますか？")) {
		var count = document.getElementById('count').value;
		var countFile = document.getElementById('countFile').value;
		var check = document.getElementsByName('checkName');
		var checkRadio = document.getElementsByName('checkUpload');
		var sname = document.getElementsByName('sname');
		//var fileName = document.getElementsByName('fileName');

		var text = "";

		for(var i = 0; i < count; i++) {
			
			if(check[i].checked) {
				text += sname[i].firstChild.data + "\n";	
			}
		}
		for(var j = 0; j < countFile; j++) {
			
			if(checkRadio[j].checked) {
				var fileName = document.getElementById('fileName' + j);
				text += fileName.firstChild.data + "\n";	
			}
		}
		alert(text + "をアップロードしました。" );
		alert("アップロード完了！");
	    $('#date').attr('disabled',false);
	    $('#bank').attr('disabled',false);
	    $('#days').attr('disabled',false);
	    $('#races').attr('disabled',false);
	    $('#freetext').attr('readonly',false);
	}
}
function onClickSearch() {
	document.getElementById('list').style.visibility = "visible";
	$("table.list tbody").html("");
	var work = "";

	work += '<tr>\n';
	work += '<th class="info"></th>\n';
	work += '<th class="info">競輪場</th>\n';
	work += '<th class="info">開催日</th>\n';
	work += '<th class="info">R</th>\n';
	work += '<th class="info">選手</th>\n';
	work += '</tr>';
	work += '<tr>\n';
	work += '<td><input type="checkbox" id="checkList" name="checkName"></td>';
	work += '<td>千葉</td>';	
	work += '<td></td>';
	work += '<td></td>';
	work += '<td><div name="sname"></div></td>\n';
    work += '</tr>';
	work += '<tr>\n';
	work +=  '<td><input type="checkbox" id="checkList" name="checkName"></td>';
	work +=  '<td>千葉</td>';
	work +=  '<td>2014/11/06</td>';
	work +=  '<td></td>';
	work +=  '<td><div name="sname"></div></td>\n';
    work += '</tr>';
	work += '<tr>\n';
	work +=  '<td><input type="checkbox" id="checkList" name="checkName"></td>';
	work +=  '<td>千葉</td>';
	work +=  '<td>2014/11/06</td>';
	work +=  '<td>12</td>';
	work +=  '<td><div name="sname">14089 浅井 康太</div></td>\n';
    work += '</tr>';
	work += '<tr>\n';
	work +=  '<td><input type="checkbox" id="checkList" name="checkName"></td>';
	work +=  '<td>千葉</td>';
	work +=  '<td>2014/11/06</td>';
	work +=  '<td>12</td>';
	work +=  '<td><div name="sname">12972 金子 貴志</div></td>\n';
    work += '</tr>';
	work += '<tr>\n';
	work +=  '<td><input type="checkbox" id="checkList" name="checkName"></td>';
	work +=  '<td>千葉</td>';
	work +=  '<td>2014/11/06</td>';
	work +=  '<td>12</td>';
	work +=  '<td><div name="sname">12172 後閑 信一</div></td>\n';
    work += '</tr>';
	work += '<tr>\n';
	work +=  '<td><input type="checkbox" id="checkList" name="checkName"></td>';
	work +=  '<td>千葉</td>';
	work +=  '<td>2014/11/06</td>';
	work +=  '<td>12</td>';
	work +=  '<td><div name="sname">13393 長塚 智広</div></td>\n';
    work += '</tr>';
	work += '<tr>\n';
	work +=  '<td><input type="checkbox" id="checkList" name="checkName"></td>';
	work +=  '<td>千葉</td>';
	work +=  '<td>2014/11/06</td>';
	work +=  '<td>12</td>';
	work +=  '<td><div name="sname">13917 成田 和也</div></td>\n';
    work += '</tr>';
	work += '<tr>\n';
	work +=  '<td><input type="checkbox" id="checkList" name="checkName"></td>';
	work +=  '<td>千葉</td>';
	work +=  '<td>2014/11/06</td>';
	work +=  '<td>12</td>';
	work +=  '<td><div name="sname">14054 新田 祐大</div></td>\n';
    work += '</tr>';
	work += '<tr>\n';
	work +=  '<td><input type="checkbox" id="checkList" name="checkName"></td>';
	work +=  '<td>千葉</td>';
	work +=  '<td>2014/11/06</td>';
	work +=  '<td>12</td>';
	work +=  '<td><div name="sname">13841 平原 康多</div></td>\n';
    work += '</tr>';
	work += '<tr>\n';
	work +=  '<td><input type="checkbox" id="checkList" name="checkName"></td>';
	work +=  '<td>千葉</td>';
	work +=  '<td>2014/11/06</td>';
	work +=  '<td>12</td>';
	work +=  '<td><div name="sname">14534 深谷 知広</div></td>\n';
    work += '</tr>';
	work += '<tr>\n';
	work +=  '<td><input type="checkbox" id="checkList" name="checkName"></td>';
	work +=  '<td>千葉</td>';
	work +=  '<td>2014/11/06</td>';
	work +=  '<td>12</td>';
	work +=  '<td><div name="sname">12833 村上 義弘</div></td>\n';
    work += '</tr>';
    document.getElementById('count').value="11";
    $("table.list tbody").append(work);
    
}
function checkBank() {
	var bankCd = document.getElementById('bank').value;
	
	if (bankCd = '00') {
		document.getElementById('enrollArea').style.visibility = "";
		document.getElementById('raceArea').style.visibility = "hidden";
	} else {
		document.getElementById('enrollArea').style.visibility = "hidden";
		document.getElementById('raceArea').style.visibility = "";
	}
	
}
function onClickCancel() {
	document.getElementById('uploadPic').style.visibility = "hidden";
	document.getElementById('flg').value="0";
	document.getElementById('upload').value="アップロード";
	document.getElementById('cancel').disabled="disabled";
    $('#date').attr('disabled',false);
    $('#bank').attr('disabled',false);
    $('#days').attr('disabled',false);
    $('#races').attr('disabled',false);
    $('#freetext').attr('readonly',false)
	$("table.viewer tbody").html("");
}
function onload() {
	checkStorage();
	
	if (!Modernizr.inputtypes.date) { //HTML5のinput要素に対応しているか判定
		jQuery('#date1').datepicker({ //していなかったらjQueryのdatepickerを該当するidのフォーム要素に適用
			beforeShow: function(input, inst) {
			var calendar = inst.dpDiv;

			setTimeout(function() {
				calendar.position({ //オプションでカレンダー位置を指定したりして
			    	my: 'left bottom',
			    	at: 'left top',
			    	of: input
			 	});
			}, 1);
			}
		});
	}
}
