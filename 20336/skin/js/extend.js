(function ($, window) {
    /** 默认配置 */
    var defaults = {
        //比例
        ratio: 'auto',
        //播放效果
        style: 'fade',
        //播放速度
        speend: 5,
        //是否自动播放
        autoplay: 1,
        //是否显示上下翻页按钮
        showcotrols: 1,
        //文字位置(0:底部，1:顶部)
        captionpos: 0,
        //菜单类型(0:无,1:文字,2:小图)
        navstyle: 0,
        //菜单位置(0:底部,1:顶部,2:左边,3:右边)
        navlocation: 0,
        //禁用事件
        disabled: false
    };
    function slide(element, options) {
        this.element = element;
        this.$element = $(element);
        this.$items = null;
        this.curIndex = 0;
        this.options = $.extend({}, defaults, options);
        this.playtime = null;
        this.allimg = null;
        this.imginfo = [];
        this.curheight = 0;
        this.curSubIndex = 0;
        this._init();
    }
    slide.prototype = {
        //初始化
        _init: function () {
            this.$items = this.$element.find('div.slide-item');
            this._setShowCotrols();
            this._setCaptionPos();
            this._setNavigation();
            this._initSize();
            if (!this.options.disabled)
                this._initEvent();
            this._autoPlay();
        },
        //初始比例
        _initSize: function () {
            var self = this;
            this.allimg = this.$element.find('div.slide-item img');
            var count = 1;
            //加载图片
            for (var i = 0; i < this.allimg.length; i++) {
                var temImg = $(this.allimg[i]);
                var newImg = new Image;
                newImg.index = i;
                newImg.onload = function () {
                    var index = parseInt(this.index);
                    self.imginfo[self.imginfo.length] = {'index': index, 'width': this.width, 'height': this.height};
                    if (count == self.allimg.length)
                        self._setSize();
                    if (index > 0)
                        $(self.$items[index]).hide();
                    count++;
                };
                newImg.src = temImg.attr('src');
            }
        },
        //事件
        _initEvent: function () {
            var self = this;
            var prev = this.$element.find('div.cycle-prev:first');
            var next = this.$element.find('div.cycle-next:first');
            prev.click(function () {
                if ($(this).data('play') == '1') {
                    return '';
                } else {
                    $(this).data('play', '1');
                }
                self._stopPlay();
                var index = self.curIndex - 1;
                if (index < 0)
                    index = self.$items.length - 1;
                self._play(index);
                self._add_active(index);
                self._autoPlay();
                return false;
            });
            next.click(function () {
                if ($(this).data('play') == '1') {
                    return '';
                } else {
                    $(this).data('play', '1');
                }
                self._stopPlay();
                var index = self.curIndex + 1;
                if (index > self.$items.length - 1)
                    index = 0;
                self._play(index);
                self._add_active(index);
                self._autoPlay();
                return false;
            });
        },
        //设置比例
        _setSize: function () {
            var maxWith = this.$element.width();
            var maxHeight = 0;
            if (this.options.ratio != 'auto') {
                var ratioItems = this.options.ratio.split(':');
                var ratioWidth = parseInt(ratioItems[0]);
                var ratioHeight = parseInt(ratioItems[1]);
                maxHeight = parseInt((maxWith / ratioWidth) * ratioHeight);
            }

            for (var i = 0; i < this.allimg.length; i++) {
                var temImg = $(this.allimg[i]);
                var temImgInfo = null;
                for (var j = 0; j < this.imginfo.length; j++) {
                    if (i == this.imginfo[j].index) {
                        temImgInfo = this.imginfo[j];
                    }
                }
                var imgWidth = temImgInfo.width;
                var imgHeight = temImgInfo.height;
                if (imgWidth > maxWith) {
                    imgHeight = imgHeight * (maxWith / imgWidth);
                    imgWidth = maxWith;
                }
                if (this.options.ratio == 'auto') {
                    maxHeight = imgHeight > maxHeight ? imgHeight : maxHeight;
                    maxHeight = parseInt(maxHeight);
                } else {
                    if (imgHeight > maxHeight) {
                        imgWidth = imgWidth * (maxHeight / imgHeight);
                        imgHeight = maxHeight;
                        imgWidth = parseInt(imgWidth);
                    }
                }
                temImg.css({'width': imgWidth});
                temImg.parent().css({'width': imgWidth, 'left': (0 - parseInt(imgWidth / 2)), 'top': (0 - parseInt(imgHeight / 2))});
            }
            this.$element.find('.w-slide-content').css('height', maxHeight);
            this._setNavigation();
        },
        //自动播放
        _autoPlay: function () {
            if (this.options.autoplay == 1) {
                var self = this;
                //setTimeout/setInterval
                this.playtime = window.setInterval(function () {
                    self._play();
                    var autoIndex;
                    if (self.curIndex + 1 >= self.$items.length) {
                        autoIndex = 0;
                    } else {
                        autoIndex = self.curIndex + 1;
                    }
                    self._add_active(autoIndex);
                }, self.options.speend * 1000);

            }
        },
        //停止播放
        _stopPlay: function () {
            if (this.options.autoplay == 1) {
                if (this.playtime != null)
                    window.clearInterval(this.playtime);

            }
        },
        //关闭自动播放
        _closeAutoPlay: function () {
            if (this.playtime != null) {
                clearInterval(this.playtime);
                this.playtime = null;
            }
        },
        _getNextIndex: function (index) {
            var nextIndex = 0;
            if (typeof index == 'number') {
                nextIndex = index;
                return index;
            } else {
                if (this.curIndex >= this.$items.length - 1) {
                    nextIndex = 0;
                } else {
                    nextIndex = this.curIndex + 1;
                }
            }
            return nextIndex;
        },
        //播放
        _play: function (index) {
            var self = this;
            var nextIndex = this._getNextIndex(index);
            //渐显效果fade
            if (this.options.style == 'fade') {
                $(this.$items[this.curIndex]).fadeOut(function () {
                    self.curIndex = nextIndex;
                    $(self.$items[self.curIndex]).fadeIn('fast');
                    // 改变点击状态
                    self._elementPaly(self);
                });
            }
            //左右滑动效果
            if (this.options.style == 'slide') {
                var maxWith = this.$element.width();
                $(this.$items[nextIndex]).css('left', maxWith).show();
                $(this.$items[this.curIndex]).animate({'left': (0 - maxWith)}, 500, function () {
                    $(this).hide().css('left', 0);
                    // 改变点击状态
                    self._elementPaly(self);
                });
                $(this.$items[nextIndex]).animate({'left': 0});
                this.curIndex = nextIndex;
            }
            //卡片式和百叶窗效果
            if (this.options.style == 'fold' || this.options.style == 'slice') {
                var temCurItem = $(this.$items[this.curIndex]);
                temCurItem.css('z-index', 1);
                this.curIndex = nextIndex;
                // $(this.$items[this.curIndex]).hide();
                var curItem = $(this.$items[nextIndex])
                curItem.css('z-index', 2);
                var curImg = curItem.find('.slide-img');
                curImg.css('opacity', 0);
                curItem.show();
                var curImgDiv = $(curItem.find('.slide-item-div-inner'));
                var curWidth = curImgDiv.width();
                var curHeight = curImgDiv.height();
                var subWidth = curWidth / 12;
                var html = '<div class="slide-img-block">';
                var imgurl = curItem.find('img').attr('src');
                for (var i = 0; i < 12; i++) {
                    html += '<div style="';
                    if (this.options.style == 'fold') {
                        html += 'width:0px;left:' + (subWidth * i) + 'px;'
                    } else if (this.options.style == 'slice') {
                        html += 'width:' + subWidth + 'px;left:' + (subWidth * i) + 'px;';
                    }
                    html += 'opacity:0;position:absolute;top:0;height:' + curHeight + 'px;overflow:hidden;">';
                    html += '<img src="' + imgurl + '" style="width:' + curWidth + 'px;top:0;left:-' + (subWidth * i) + 'px;position:absolute;dispaly:block;max-width:none;" /></div>';
                }
                html += "</div>";
                curImgDiv.append(html);
                var count = 0;
                var itemList = curItem.find('.slide-img-block').children();
                if (this.options.style == 'fold') {
                    itemList.each(function () {
                        $(this).animate({'width': subWidth, 'opacity': 1}, count * 100, function () {
                            var index = itemList.index($(this));
                            if (index == itemList.length - 1 && temCurItem.css('z-index') != 2) {
                                curImg.css('opacity', 1);
                                temCurItem.fadeOut();
                                curItem.find('.slide-img-block').remove();
                            }
                        });
                        count++;
                    });
                } else if (this.options.style == 'slice') {
                    this.curSubIndex = 0;
                    //  this._sliceAction(itemList, subWidth, curImg, curItem, temCurItem);
                    itemList.each(function () {
                        var index = itemList.index($(this));
                        $(this).animate({'opacity': 1}, count * 150, function () {
                            if (itemList.index($(this)) == itemList.length - 1 && temCurItem.css('z-index') != 2) {
                                curImg.css('opacity', 1);
                                temCurItem.fadeOut();
                                curItem.find('.slide-img-block').remove();
                            }
                        });
                        count++;
                    });
                }
                setTimeout(function () {
                    self._elementPaly(self);
                }, count * 150);

            }
        },
        _elementPaly: function (self) {
            // 改变点击状态
            self.$element.find(".cycle-prev").data("play", '0');
            self.$element.find(".cycle-next").data("play", '0');
            self.$element.find(".slide-page>a").each(function () {
                if ($(this).data("play") === '1') {
                    $(this).data("play", "0");
                }
            });
        },
        _sliceAction: function (items, width, curImg, curItem, temCurItem) {
            var self = this;
            if (this.curSubIndex >= items.length - 1) {
                curImg.css('opacity', 1);
                temCurItem.hide();
                curItem.find('.slide-img-block').remove();
                return false;
            }
            var item = $(items[this.curSubIndex]);
            item.animate({'opacity': 1}, 50, function () {
                self.curSubIndex++;
                self._sliceAction(items, width, curImg, curItem, temCurItem);
            });
        },
        //设置文字位置
        _setCaptionPos: function () {
            var subElement = this.$element.children().get(0);
            if (this.options.captionpos == 1) {
                $(subElement).addClass('slide-caption-top');
            } else {
                $(subElement).removeClass('slide-caption-top');
            }
        },
        //设置分页按钮是否显示
        _setShowCotrols: function () {
            var prev = this.$element.find('div.cycle-prev:first');
            var next = this.$element.find('div.cycle-next:first');
            if (this.options.showcotrols == 1) {
                prev.show();
                next.show();
            } else {
                prev.hide();
                next.hide();
            }
        },
        //设置当前导航
        _add_active: function (index) {
            var pagest = this.$element.find('.slide-page').children('a');
            pagest.eq(index).siblings('a').removeClass('active');
            pagest.eq(index).addClass('active');

        },
        //设置导航
        _setNavigation: function () {
            var nav = this.$element.find('.slide-page');
            if (nav.length > 0)
                nav.remove();
            if (this.options.navstyle > 0) {
                var self = this;
                var subElement = $(this.$element.children().get(0));
                var posElement = $(subElement.children().get(0))
                if (this.options.captionpos == 1) {
                    var _w_slide_img = "w-slide-page-img slide-caption-top";
                    var _w_slide_num = "w-slide-page-num slide-caption-top";
                } else {
                    var _w_slide_img = "w-slide-page-img";
                    var _w_slide_num = "w-slide-page-num";
                }
                var className = (this.options.navstyle == 1 ? _w_slide_num : _w_slide_img);
                subElement.attr('class', className);
                className = '';
                var navBox = $(this._getNavHtml());
                if (!this.options.disabled) {
                    navBox.find('a').each(function () {
                        $(this).on('click', function () {
                            if ($(this).data('play') == '1') {
                                return '';
                            } else {
                                $(this).data('play', '1');
                            }
                            self._stopPlay();
                            self._play(parseInt($(this).attr('data-index')));
                            self._add_active(parseInt($(this).attr('data-index')));
                            self._autoPlay();
                            return false;
                        })
                    });
                }
                posElement.append(navBox);
                var slideContent = $(this.$element.find('.w-slide-content:first'));
                switch (this.options.navlocation) {
                    case 0:
                        className = 'w-page-bottom';
                        break;
                    case 1:
                        className = 'w-page-top';
                        break;
                    case 2:
                        className = 'w-page-left';
                        break;
                    case 3:
                        className = 'w-page-right';
                        break;
                }
                switch (this.options.navlocation) {
                    case 0:
                    case 1:
                        var widthSlide = slideContent.outerWidth(true);
                        var allImg = navBox.find('img');
                        if (allImg.length * 80 > widthSlide) {
                            var itemWidth = widthSlide / allImg.length;
                            allImg.css('width', itemWidth - 10);
                        }
                        break;
                    case 2:
                    case 3:
                        var heightSlide = slideContent.outerHeight(true);
                        var allImg = navBox.find('img');
                        if (allImg.length * 80 > heightSlide) {
                            var itemHeight = heightSlide / allImg.length;
                            allImg.css('height', itemHeight - 10);
                        }
                        break;
                }
                posElement.attr('class', className);
            }
        },
        _getNavHtml: function () {
            var html = '<div class="slide-page">';
            var imgCount = this.$items.length;
            for (var i = 0; i < imgCount; i++) {
                if (this.options.navstyle == 1) {
                    if (i === this.curIndex) {
                        html += '<a href="javascript:void(0);" data-index="' + i + '" class="active"> ' + (i + 1) + ' </a>';
                    } else {
                        html += '<a href="javascript:void(0);" data-index="' + i + '"> ' + (i + 1) + ' </a>';
                    }
                } else if (this.options.navstyle == 2) {
                    var item = $(this.$items[i]);
                    item = item.find('img.slide-img');
                    if (i === this.curIndex) {
                        html += '<a href="javascript:void(0)" data-index="' + i + '" class="active"><img src="' + item.attr('src') + '"></a>';
                    } else {
                        html += '<a href="javascript:void(0)" data-index="' + i + '"><img src="' + item.attr('src') + '"></a>';
                    }
                }
            }
            html += '</div>';
            return html;
        },
        //配置
        option: function (key, value) {
            if (typeof (this.options[key]) == 'number')
                value = parseInt(value);
            this.options[key] = value;
            if (key == 'ratio')
                this._setSize();
            if (key == 'autoplay' || key == 'speend') {
                this._closeAutoPlay();
                this._autoPlay();
            }
            if (key == 'showcotrols')
                this._setShowCotrols();
            if (key == 'navstyle' || key == 'navlocation')
                this._setNavigation();
            this._setCaptionPos();
            return this.options[key];
        }
    };
    /** 封装 */
    $.fn.slide = function (options) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'slide')) {
                    $.data(this, 'slide', new slide(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_') {
            return this.each(function () {
                var instance = $.data(this, 'slide');
                if (instance instanceof slide && typeof instance[options] === 'function') {
                    instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
                //清除缓存
                if (options === 'destroy') {
                    $.data(this, 'slide', null);
                }
            });
        }
    };
}(jQuery, window));

// 判断图片加载的函数
function isImgLoad(callback) {
    var isLoad = true;
    $('.g-cover').each(function () {
        if ($(this).height() === 0) {
            isLoad = false;
        }
    });
    if (isLoad) {
        callback();
        // 为false，因为找到了没有加载完成的图，将调用定时器递归
    } else {
        var t_img;
        t_img = setInterval(function () {
            clearInterval(t_img);
            isImgLoad(callback);
        }, 100);
    }
}

// 判断图片加载的函数
var allIsImgLoad = function (_obj, callBack) {
    var imgLoad = new Array;
    _obj.each(function (key) {
        $(this).load(function () {
            imgLoad[key] = true;
            if (imgLoad.length == _obj.length) {
                callBack();
            }
        });
        if (window.navigator.userAgent.indexOf("Chrome/42.0") > 0) {
            var src = $(this).attr("src") + "?" + Date.parse(new Date());
        } else {
            var src = $(this).attr("src");
        }
        $(this).attr("src", src);
    });
}