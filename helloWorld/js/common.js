// （1）Web Storageの実装確認
if (typeof sessionStorage === 'undefined') {
	alert("このブラウザは、機能の利用要件を満たしていません。\nできる限り最新のブラウザで実行してください。");
	window.close();
} else {
	var storage = sessionStorage;

	function checkStorage() {
		if (storage.length > 0) {
			// セッションに何らか情報が存在している場合、userIdの存在有無を確認する。
			if (storage.getItem("userId") == null) {
				alert("ログイン有効期限切れです。再度ログイン画面から操作をやり直してください。");
				removeallStorage();
			}
		} else {
			alert("不正なアクセスです。再度ログイン画面から操作をやり直してください。");
			removeallStorage();
		}
	}
	// sessionStorageから削除
	function removeStorage(key) {
		storage.removeItem(key);
	}

	// sessionStorageからすべて削除
	function removeallStorage() {
		storage.clear();
		location.replace("login.html");
	}
	
	function onClickExit() {
		location.replace("menu.html");
	}
}