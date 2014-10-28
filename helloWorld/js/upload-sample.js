function onClickUpload() {
	var flg = document.getElementById('flg').value;
	if (flg == '0') {
		document.getElementById('center').style.visibility = "visible";
		document.getElementById('flg').value="1";
		document.getElementById('upload').value="完了";
		document.getElementById('cancel').disabled="";
		var sensyu = document.getElementById('sensyu').value;
		var row = 9;
		if (sensyu != '') {
			row = sensyu % 2;
		}
		
		$("table.viewer tbody").html("");
	    //HTMLを生成
		var work = "";
	    for(var index in data.sample){
	    	if (row == 0) {
	    		if (index == 24) {
	    			break;
	    		}
	    	} else if (row == 1) {
	    		if (index == 18) {
	    			break;
	    		}
	    	}
	    	if (index == 0) {
	    		work += "<tr>\n";
	    	} else if (index % 6 == 0) {
	    		work += "</tr>\n<tr>\n";
	    	}
	    	work +=  '<td class="thumb"><a href="' + data.sample[index].org + ' "rel="lightbox[group]" >';
	    	work +=  '<img class="thumbImg" src="' + data.sample[index].thumb + '" /></a></td>\n';
	    }
	    work += '</tr>';
	    $("table.viewer tbody").append(work);
	    
	    $('#date').attr('disabled',true);
	    $('#bank').attr('disabled',true);
	    $('#sensyu').attr('disabled',true);
	    $('#freetext').attr('readonly',true);
//	    document.getElementById('date').readOnly=;
//	    document.getElementById('bank').readOnly=true;
//	    document.getElementById('sensyu').readOnly=true;
//	    document.getElementById('caption').readOnly=true;
	} else {
		if (confirm("アップロードしますか？")) {
			alert("アップロード完了！");
			document.getElementById('center').style.visibility = "hidden";
			document.getElementById('flg').value="0";
			document.getElementById('upload').value="アップロード";
			document.getElementById('cancel').disabled="disabled";
		    $('#date').attr('disabled',false);
		    $('#bank').attr('disabled',false);
		    $('#sensyu').attr('disabled',false);
		    $('#freetext').attr('readonly',false);
			$("table.viewer tbody").html("");
		}
	}
}
function onClickCancel() {
	document.getElementById('center').style.visibility = "hidden";
	document.getElementById('flg').value="0";
	document.getElementById('upload').value="アップロード";
	document.getElementById('cancel').disabled="disabled";
    $('#date').attr('disabled',false);
    $('#bank').attr('disabled',false);
    $('#sensyu').attr('disabled',false);
    $('#freetext').attr('readonly',false);
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
