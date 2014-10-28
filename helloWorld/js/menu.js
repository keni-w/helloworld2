function onload() {
	checkStorage();
	
	if (storage.getItem("adminFlg") == '1') {
		document.getElementById('admin').style.display = "";		
	}
}
function exeLogout() {

	if (window.confirm("ログアウトします。宜しいですか？")) {
		removeallStorage();
	}
}