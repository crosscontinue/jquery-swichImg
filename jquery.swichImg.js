(function($){
	$.fn.switchImg = function(options){
		options = $.extend({
			baseBox: '.switch_base',
			listBox: '.switch_list',
			minSize: 170,
			maxSize: 380,
			duration: 500,
			txtClass: 'pn'
		}, options);

		$(options.listBox).find('a').live('click',function(){
			if($(this).hasClass('current')){
				return false;
			} else {
				var defaultImg = $(options.baseBox).find('img');
				var minSize = '_'+options.minSize;
				var maxSize = '_'+options.maxSize;
				var imgPath = $(this).find('img').attr('src').replace(minSize, maxSize);
				var itemNum = $(this).find('img').attr('alt');
				//品番表示用のオブジェクトを生成
				if(!defaultImg.parent().find('p').length){
					defaultImg.parent().prepend('<p class="'+options.txtClass+'"/>');
				}
				//品番を自動生成
				if($('p.'+options.txtClass).length){
					$('p.'+options.txtClass).text(itemNum);
				}
				//current を削除
				$(options.listBox).find('li').each(function(){
					$(this).find('a').removeClass('current');
				});
				//classにcurrentを追加して、画像の切り換え
				$(this).addClass('current');
				defaultImg.stop().animate({
					opacity: 0
				},options.duration,function(){
					$(this).attr('src',imgPath);
					$(this).animate({
						opacity: 1
					},options.duration)
				});
			}
		});
		return this;
	}
})(jQuery);
