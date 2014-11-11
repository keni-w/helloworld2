function onClickSearch() {
	document.getElementById('downloadPic').style.visibility = "visible";
	var sensyu = document.getElementById('sensyu').value;
	var row = 9;
	if (sensyu != '') {
		row = sensyu % 2;
	}
	var checkRadio = document.getElementsByName('radio');
	for(var i = 0; i < checkRadio.length; i++) {
		if (checkRadio[i].checked && checkRadio[i].value == '2') {
			row = 2;
		}
	}
    $('#downloadText').attr('readonly',false);
	$("table.viewer tbody").html("");
    //HTMLを生成
	var work = "";
	var count = 0;
	var interruptFlg = false; 
    for(var index in data.sample){
    	if (row == 0) {
    		if (index == 20) {
    			interruptFlg = true;
    			count = index;
    			break;
    		}
    	} else if (row == 1) {
    		if (index == 15) {
    			interruptFlg = true;
    			count = index;
    			break;
    		}
    	} else if (row == 2) {
    		if (index == 5) {
    			interruptFlg = true;
    			count = index;
    			break;
    		}
    	}
    	if (index == 0) {
    		work += "<tr>\n";
    	} else if (index % 5 == 0) {
    		work += "</tr>\n<tr>\n";
    	}
    	work +=  '<td valign="bottom"><input type="checkbox" name="selectDownload" id="selectDownload' + index + '"/>';
    	work +=  '<td class="thumb"><a href="' + data.sample[index].org + '" rel="lightbox[group]" name="downloadImage" id="' + data.sample[index].fileId + '" >';
    	work +=  '<img class="thumbImg" src="' + data.sample[index].thumb + '" /></a></td>\n';
    }

    if (interruptFlg) {
    	document.getElementById('count').value = count;
    } else {
        document.getElementById('count').value = data.sample.length;
    }
    
    work += '</tr>';
    $("table.viewer tbody").append(work);

}
function onClickDown() {
	
	var count = document.getElementById('count').value;
	var checkRadio = document.getElementsByName('selectDownload');
	var downloadImage = document.getElementsByName('downloadImage');

	var text = "";

	for(var i = 0; i < count; i++) {
		
		if(checkRadio[i].checked) {
			text += downloadImage[i].id + "\n";	
		}
	}
	alert(text + "をダウンロードしました。" );
	$('#downloadText').attr('readonly',true);
}
function onchangeRadio() {
	var checkRadio = document.getElementsByName('radio');
	$("table.viewer tbody").html("");
	document.getElementById('downloadPic').style.visibility = "hidden";
	for(var i = 0; i < checkRadio.length; i++) {
		if (checkRadio[i].checked && checkRadio[i].value == '1') {
			document.getElementById('searchTag').style.display = '';
			document.getElementById('searchRacer').style.display = 'none';
			document.getElementById('searchHis').style.display = 'none';
		} else if (checkRadio[i].checked && checkRadio[i].value == '2') {
			document.getElementById('searchTag').style.display = 'none';
			document.getElementById('searchRacer').style.display = '';
			document.getElementById('searchHis').style.display = 'none';
		} else if (checkRadio[i].checked && checkRadio[i].value == '3') {
			document.getElementById('searchTag').style.display = 'none';
			document.getElementById('searchRacer').style.display = 'none';
			document.getElementById('searchHis').style.display = '';
		}
	}
}
function checkBank() {
	var bankCd = document.getElementById('bank').value;
	
	if (bankCd = '00') {
		document.getElementById('enrollArea').style.visibility = "";
		document.getElementById('raceArea1').style.visibility = "hidden";
		document.getElementById('raceArea2').style.visibility = "hidden";
		document.getElementById('raceArea3').style.visibility = "hidden";
	} else {
		document.getElementById('enrollArea').style.visibility = "hidden";
		document.getElementById('raceArea1').style.visibility = "";
		document.getElementById('raceArea2').style.visibility = "";
		document.getElementById('raceArea3').style.visibility = "";
	}
	
}
function onload() {
	checkStorage();
	$('#downloadText').attr('readonly',true);
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
		jQuery('#date2').datepicker({ //していなかったらjQueryのdatepickerを該当するidのフォーム要素に適用
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
