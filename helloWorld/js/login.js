function exeLogin() {
	var inputUserId = document.getElementById('userId1').value;
	var inputPassword = document.getElementById('password').value;
	
	// 入力チェック
	if (inputUserId　!= "" && inputPassword != "") {
		//C#側にデータ渡して、ログイン処理
		
		// 戻り値をCookieおよびwebStorage(sessionStorage)に保持
		storage.setItem("userId",inputUserId);
		storage.setItem("userNm","サンプル太郎");
		storage.setItem("coCd","1000");
		storage.setItem("mainFlg","1");
		storage.setItem("adminFlg","1");
		storage.setItem("autUpdCon","1");
		// menuに遷移
		location.replace("menu.html");
	} else {
		alert("ログイン情報が不正です。");
	}
}
function changePassword() {
	document.getElementById('login').style.display = "none";
	document.getElementById('changePassword').style.display = "";
}
function updatePassword() {
	if (window.confirm ("パスワード変更しますか？")) {
		alert("パスワード変更しました。");
		document.getElementById('login').style.display = "";
		document.getElementById('changePassword').style.display = "none";
	}
}
function onload() {
	document.getElementById('login').style.display = "";
}