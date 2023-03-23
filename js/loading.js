const bar = new ProgressBar.Line(splashText, { //id名を指定
	easing: 'easeInOut', //アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 2000, //時間指定
	strokeWidth: 0.1, //進捗ゲージの太さ
	color: '#aeaeae', //進捗ゲージのカラー
	trailWidth: 0.1, //ゲージベースの線の太さ
	trailColor: 'rgba(255,255,255,0.3)', //ゲージベースの線のカラー
	text: { 		
		style: {
            'font-size':'32px',
			'font-family': 'EB Garamond',
            color: '#aeaeae',
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-40px 0 0 0',
			transform:'translate(-50%,-50%)',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + '<span style="font-size:12px;margin: 0 0 0 4px;">%</span>'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () { // 1.0 なら100%まで描画
	$('#splashText').fadeOut(10); //フェイドアウトでローディングテキストを削除
	$('.loaderCoverUp').addClass('coveranime'); //カバーが上に上がるクラス追加
	$('.loaderCoverDown').addClass('coveranime'); //カバーが下に下がるクラス追加
	$('#splash').fadeOut();
});