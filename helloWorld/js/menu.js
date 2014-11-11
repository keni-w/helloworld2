function onload() {
	checkStorage();
	if (storage.getItem("adminFlg") == '1') {
		document.getElementById('admin').style.display = "";		
		document.getElementById('general').style.display = "none";
	} else {
		document.getElementById('admin').style.display = "none";		
		document.getElementById('general').style.display = "";
	}
}
function exe(menuNo) {
	switch (menuNo) {
	case 1:
		// アップロード画面に遷移
		location.replace("upload-sample.html");
		break;
	case 2:
		// ダウンロード画面に遷移
		location.replace("download-sample.html");
		break;
	case 3:
		// アップロード画面に遷移
		location.replace("useHistory-sample.html");
		break;		
	default:
		window.alert("ありえないメニュー番号なのでログアウトします。")
		removeallStorage;
		break;
	}
}
function exeLogout() {

	if (window.confirm("ログアウトします。宜しいですか？")) {
		removeallStorage();
	}
}