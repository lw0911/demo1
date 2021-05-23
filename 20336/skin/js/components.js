//设置图片宽度
function setImgWidth(curComInner, cropping, comColumn, imgPadding, imgMargin, columnWidth, columnHeight) {
    var imgList = curComInner.find('div.gallery-img-in img');
    var setImgCss = function (curImgItem) {
        var imgWidth = curImgItem.width();
        if (!(imgWidth > 0))
            return false;
        var imgHeight = curImgItem.height();
        var widthThan = 100;
        var leftThan = 0;
        var topThan = 0;
        //正常格式
        if (cropping == 0) {
            var temMargin = 0;
            var tempadding = 0;
            if (imgPadding > 0)
                tempadding += (imgPadding + 1) * 2;
            if (imgMargin > 0)
                temMargin += imgMargin * 2;
            var newColumnWidth = columnWidth - temMargin;
            var newColumnHeight = columnHeight - temMargin;
            if (imgWidth <= newColumnWidth && imgHeight <= newColumnHeight) {
                widthThan = 'auto';
                leftThan = (((columnWidth - imgWidth) / 2) / columnWidth) * 100;
                topThan = (((columnHeight - imgHeight) / 2) / columnHeight) * 100;
            } else {
                if (imgHeight > newColumnHeight) {
                    imgWidth = (newColumnHeight / imgHeight) * imgWidth;
                    imgHeight = newColumnHeight;
                }
                if (imgWidth > columnWidth) {
                    imgHeight = (columnWidth / imgWidth) * imgHeight;
                    imgWidth = columnWidth;
                }
                widthThan = ((imgWidth / columnWidth) * 100) + '%';
                leftThan = (((columnWidth - imgWidth) / 2) / columnWidth) * 100;
                topThan = (((columnHeight - imgHeight) / 2) / columnHeight) * 100;
            }
            curImgItem.css({'width': widthThan, 'left': leftThan + '%', 'top': topThan + '%'});
        } else {
            //正方形和长方形
            var temImgWidth = columnWidth - (imgPadding + 1) * 2;
            var imgNewHeight = imgHeight * (temImgWidth / imgWidth);
            if (imgNewHeight < columnHeight) {
                imgWidth = (columnHeight / imgHeight) * imgWidth;
                widthThan = (imgWidth / columnWidth) * 100;
                leftThan = 0 - (((imgWidth - columnWidth) / 2) / columnWidth) * 100;
            } else {
                imgHeight = imgNewHeight;
                topThan = 0 - ((((imgHeight - columnHeight) / 2) / columnHeight) * 100);
            }
            curImgItem.css({'width': widthThan + '%', 'left': leftThan + '%', 'top': topThan + '%'});
        }
    }

    // 判断图片加载的函数
    var newIsImgLoad = function (_obj) {
        if (_obj.height() === 0) {
            var t_img;
            t_img = setInterval(function () {
                clearInterval(t_img);
                newIsImgLoad(_obj);
            }, 10);
        } else {
            setImgCss(_obj);
        }
    }

    for (var i = 0; i < imgList.length; i++) {
        var temImg = $(imgList[i]);
        temImg.css({'width': 'auto'});
        var newImg = new Image;
        newImg.index = i;
        newIsImgLoad($(imgList[i]));
        newImg.src = temImg.attr('src');
    }
}