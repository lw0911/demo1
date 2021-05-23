<!--
/*MSClass (Class Of Marquee Scrollͨ�ò���Ϲ���JS��װ��) Ver 1.65������*\

������ʱ��:2006-08-29 (Ver 0.5)
������ʱ��:2006-08-31 (Ver 0.8)
������ʱ��:2007-12-28 (Ver 1.65)
������˵��: + ���빦�� * ����������
	1.65.071228
		* �������������ʽ���� (�������������е����⣬������������)
		* ���׽������IE���⵼�����¹���ҳ�����׵����� (���θ�����Ҫ���������,��л���ϵ������������)
	1.6.070131
		+ ��ֹ��������ͣ����� (����9����������Ϊ-1���߶�̬��ֵ��ScrollStep����Ϊ-1)
		+ �ж��Ƿ���Թ��� (����������С����ʾ����,���Զ�ȡ������)
		+ ������ʼ������ (������������������ֹͣ)
		+ Ĭ��ֵ (������ID��ѡ�⣬�����������ɸ����������ѡ������)
		+ ������̬��ֵ (�������Ӣ�ı�ʾtop|up|bottom|down|left|right,ʹ���ֱ�ۡ�����)
		* ���ֹ�����׼ȷ (���θ�����ҪĿ�Ľ����Bug,��л�ܬB�������)
	1.4.061211
		+ �����ͣ�ı�������� (�����ͣ�������ҹ���)
		* �����ĵ����ع��������»�ȡ�ĸ߶�/���Ȳ�׼ȷ
		* ������������� (IE��FF��Opera��NS��MYIE)
	1.2.060922
		+ ָ����Χ��Ъ����
		* �������
		* ������Ъ����ֹͣ�Ĵ���
	1.0.060901
		+ ���¡����ҹ���
		+ ��ʼ�ȴ�ʱ��
		+ ��������
		* ����ʱ�䵥λ
		* �������
		* �����ѭ��
		* ��ǿ����
		* �����Ż�
	0.8.060829
		  ������������ϡ��������

����ʾ��ַ:http://www.popub.net/script/MSClass.html
�����ص�ַ:http://www.popub.net/script/MSClass.js

��Ӧ��˵��:ҳ�����<script type="text/javascript" src="MSClass.js" charset="gb2312"></script>
	
	����ʵ��:
		//����ֱ�Ӹ�ֵ��
		new Marquee("marquee")
		new Marquee("marquee","top")
		......
		new Marquee("marquee",0,1,760,52)
		new Marquee("marquee","top",1,760,52,50,5000)
		......
		new Marquee("marquee",0,1,760,104,50,5000,3000,52)
		new Marquee("marquee",null,null,760,104,null,5000,null,-1)

		//������̬��ֵ��
		var marquee1 = new Marquee("marquee")	*�˲�����ѡ
		marquee1.Direction = "top";	����	marquee1.Direction = 0;
		marquee1.Step = 1;
		marquee1.Width = 760;
		marquee1.Height = 52;
		marquee1.Timer = 50;
		marquee1.DelayTime = 5000;
		marquee1.WaitTime = 3000;
		marquee1.ScrollStep = 52;
		marquee1.Start();

	����˵��:
		ID		"marquee"	����ID		(��ѡ)
		Direction	(0)		��������	(��ѡ,Ĭ��Ϊ0���Ϲ���) �����õ�ֵ����:0,1,2,3,"top","bottom","left","right" (0���� 1���� 2���� 3����)
		Step		(1)		�����Ĳ���	(��ѡ,Ĭ��ֵΪ2,��ֵԽ��,����Խ��)
		Width		(760)		�������ӿ���	(��ѡ,Ĭ��ֵΪ������ʼ���õĿ���)
		Height		(52)		�������Ӹ߶�	(��ѡ,Ĭ��ֵΪ������ʼ���õĸ߶�)
		Timer		(50)		��ʱ��		(��ѡ,Ĭ��ֵΪ30,��ֵԽС,�������ٶ�Խ��,1000=1��,���鲻С��20)
		DelayTime	(5000)		��Ъͣ���ӳ�ʱ��(��ѡ,Ĭ��Ϊ0��ͣ��,1000=1��)
		WaitTime	(3000)		��ʼʱ�ĵȴ�ʱ��(��ѡ,Ĭ�ϻ�0Ϊ���ȴ�,1000=1��)
		ScrollStep	(52)		��Ъ�������	(��ѡ,Ĭ��Ϊ������/�߶�,����ֵ���ӳپ�Ϊ0��Ϊ�����ͣ����,-1��ֹ������)

��ʹ�ý���:
		1������ֱ�Ӹ�����������ʾ����Ŀ��Ⱥ͸߶ȣ���(<div id="marquee" style="width:760px;height:52px;">......</div>)
		2������Ϊ����������ʽoverflow = auto����(<div id="marquee" style="width:760px;height:52px;overflow:auto;">......</div>)
		3��Ϊ�˸�׼ȷ�Ļ�ȡ��������Ŀ��Ⱥ͸߶ȣ��뾡���ܽ���������λֱ�Ӹ�����ȷ���߶�
		4������TABLE��ǵĺ����������Ҫ��TABLE������ʽdisplay = inline����(<div id="marquee" style="width:760px;height:52px;overflow:auto;"><table style="display:inline">......</table></div>)
		5�����ڷ����������Ъ������Ҫע���������λ��ļ�࣬ͬʱ��Ҫ�������Ŀ��Ӹ߶ȺͿ��ӿ�������׼ȷ�����ã����ڸ�������λ��ļ�����ͨ�������м����ߵ�Ԫ��ĸ߿��������е���
		6������LI�Զ����е�������ʱû�и��õĽ���취�����齫��ת���ɱ���(TABLE)����ʽ���ﵽͬ�ȵ�Ч��
		7����Ժ�����������ֶ��䣬�����ĩ�����Կո�" "�����ģ��뽫�ո�" "ת����"&nbsp;"
		8�������ͣ����˼��Դ��Flash��������һ���ľ����ԣ������ڽ�������ͼƬ<img>���ߴ����ӵ�ͼƬ<a><img></a>����ʽ������Ҫ��ֹ���Զ����У�

���С���л:
	���ϵ�����(QQ:30370740) (IEҳ�����׵�Bug) 2007/12/22
	�ܬB zhoujun#yuchengtech.com (���ֹ������е�bug) 2007/01/31
	�Ա����򷢲��������յ��������ѵ��ʼ�������˺ܶ�����ͽ��飬��л��ҵ�֧�֣�

\***��������/��Ȩ����:������(333) E-Mail:zhadan007@21cn.com ��ַ:http://www.popub.net***/


function Marquee()
{
	this.ID = document.getElementById(arguments[0]);
	if(!this.ID)
	{
		alert("��Ҫ���õ�\"" + arguments[0] + "\"��ʼ������\r\n�����ǩID�����Ƿ���ȷ!");
		this.ID = -1;
		return;
	}
	this.Direction = this.Width = this.Height = this.DelayTime = this.WaitTime = this.CTL = this.StartID = this.Stop = this.MouseOver = 0;
	this.Step = 1;
	this.Timer = 30;
	this.DirectionArray = {"top":0 , "up":0 , "bottom":1 , "down":1 , "left":2 , "right":3};
	if(typeof arguments[1] == "number" || typeof arguments[1] == "string")this.Direction = arguments[1];
	if(typeof arguments[2] == "number")this.Step = arguments[2];
	if(typeof arguments[3] == "number")this.Width = arguments[3];
	if(typeof arguments[4] == "number")this.Height = arguments[4];
	if(typeof arguments[5] == "number")this.Timer = arguments[5];
	if(typeof arguments[6] == "number")this.DelayTime = arguments[6];
	if(typeof arguments[7] == "number")this.WaitTime = arguments[7];
	if(typeof arguments[8] == "number")this.ScrollStep = arguments[8];
	this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
	this.ID.noWrap = true;
	this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
	if(arguments.length >= 7)this.Start();
}

Marquee.prototype.Start = function()
{
	if(this.ID == -1)return;
	if(this.WaitTime < 800)this.WaitTime = 800;
	if(this.Timer < 20)this.Timer = 20;
	if(this.Width == 0)this.Width = parseInt(this.ID.style.width);
	if(this.Height == 0)this.Height = parseInt(this.ID.style.height);
	if(typeof this.Direction == "string")this.Direction = this.DirectionArray[this.Direction.toString().toLowerCase()];
	this.HalfWidth = Math.round(this.Width / 2);
	this.HalfHeight = Math.round(this.Height / 2);
	this.BakStep = this.Step;
	this.ID.style.width = this.Width + "px";
	this.ID.style.height = this.Height + "px";
	if(typeof this.ScrollStep != "number")this.ScrollStep = this.Direction > 1 ? this.Width : this.Height;
	var templateLeft = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;display:inline;'><tr><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td></tr></table>";
	var templateTop = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;'><tr><td>MSCLASS_TEMP_HTML</td></tr><tr><td>MSCLASS_TEMP_HTML</td></tr></table>";
	var msobj = this;
	msobj.tempHTML = msobj.ID.innerHTML;
	if(msobj.Direction <= 1)
	{
		msobj.ID.innerHTML = templateTop.replace(/MSCLASS_TEMP_HTML/g,msobj.ID.innerHTML);
	}
	else
	{
		if(msobj.ScrollStep == 0 && msobj.DelayTime == 0)
		{
			msobj.ID.innerHTML += msobj.ID.innerHTML;
		}
		else
		{
			msobj.ID.innerHTML = templateLeft.replace(/MSCLASS_TEMP_HTML/g,msobj.ID.innerHTML);
		}
	}
	var timer = this.Timer;
	var delaytime = this.DelayTime;
	var waittime = this.WaitTime;
	msobj.StartID = function(){msobj.Scroll()}
	msobj.Continue = function()
				{
					if(msobj.MouseOver == 1)
					{
						setTimeout(msobj.Continue,delaytime);
					}
					else
					{	clearInterval(msobj.TimerID);
						msobj.CTL = msobj.Stop = 0;
						msobj.TimerID = setInterval(msobj.StartID,timer);
					}
				}

	msobj.Pause = function()
			{
				msobj.Stop = 1;
				clearInterval(msobj.TimerID);
				setTimeout(msobj.Continue,delaytime);
			}

	msobj.Begin = function()
		{
			msobj.ClientScroll = msobj.Direction > 1 ? msobj.ID.scrollWidth / 2 : msobj.ID.scrollHeight / 2;
			if((msobj.Direction <= 1 && msobj.ClientScroll <= msobj.Height + msobj.Step) || (msobj.Direction > 1 && msobj.ClientScroll <= msobj.Width + msobj.Step))			{
				msobj.ID.innerHTML = msobj.tempHTML;
				delete(msobj.tempHTML);
				return;
			}
			delete(msobj.tempHTML);
			msobj.Direction > 1 ? msobj.ID.scrollLeft = 0 : msobj.ID.scrollTop = 0;
			msobj.TimerID = setInterval(msobj.StartID,timer);
			if(msobj.ScrollStep < 0)return;
			msobj.ID.onmousemove = function(event)
						{
							if(msobj.ScrollStep == 0 && msobj.Direction > 1)
							{
								var event = event || window.event;
								if(window.event)
								{
									if(msobj.IsNotOpera)
									{
										msobj.EventLeft = event.srcElement.id == msobj.ID.id ? event.offsetX - msobj.ID.scrollLeft : event.srcElement.offsetLeft - msobj.ID.scrollLeft + event.offsetX;
									}
									else
									{
										msobj.ScrollStep = null;
										return;
									}
								}
								else
								{
									msobj.EventLeft = event.layerX - msobj.ID.scrollLeft;
								}
								msobj.Direction = msobj.EventLeft > msobj.HalfWidth ? 3 : 2;
								msobj.AbsCenter = Math.abs(msobj.HalfWidth - msobj.EventLeft);
								msobj.Step = Math.round(msobj.AbsCenter * (msobj.BakStep*2) / msobj.HalfWidth);
							}
						}
			msobj.ID.onmouseover = function()
						{
							if(msobj.ScrollStep == 0)return;
							msobj.MouseOver = 1;
							clearInterval(msobj.TimerID);
						}
			msobj.ID.onmouseout = function()
						{
							if(msobj.ScrollStep == 0)
							{
								if(msobj.Step == 0)msobj.Step = 1;
								return;
							}
							msobj.MouseOver = 0;
							if(msobj.Stop == 0)
							{
								clearInterval(msobj.TimerID);
								msobj.TimerID = setInterval(msobj.StartID,timer);
							}
						}
		}
	setTimeout(msobj.Begin,waittime);
}

Marquee.prototype.Scroll = function()
{
	switch(this.Direction)
	{
		case 0:
			this.CTL += this.Step;
			if(this.CTL >= this.ScrollStep && this.DelayTime > 0)
			{
				this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
				this.Pause();
				return;
			}
			else
			{
				if(this.ID.scrollTop >= this.ClientScroll)
				{
					this.ID.scrollTop -= this.ClientScroll;
				}
				this.ID.scrollTop += this.Step;
			}
		break;

		case 1:
			this.CTL += this.Step;
			if(this.CTL >= this.ScrollStep && this.DelayTime > 0)
			{
				this.ID.scrollTop -= this.ScrollStep + this.Step - this.CTL;
				this.Pause();
				return;
			}
			else
			{
				if(this.ID.scrollTop <= 0)
				{
					this.ID.scrollTop += this.ClientScroll;
				}
				this.ID.scrollTop -= this.Step;
			}
		break;

		case 2:
			this.CTL += this.Step;
			if(this.CTL >= this.ScrollStep && this.DelayTime > 0)
			{
				this.ID.scrollLeft += this.ScrollStep + this.Step - this.CTL;
				this.Pause();
				return;
			}
			else
			{
				if(this.ID.scrollLeft >= this.ClientScroll)
				{
					this.ID.scrollLeft -= this.ClientScroll;
				}
				this.ID.scrollLeft += this.Step;
			}
		break;

		case 3:
			this.CTL += this.Step;
			if(this.CTL >= this.ScrollStep && this.DelayTime > 0)
			{
				this.ID.scrollLeft -= this.ScrollStep + this.Step - this.CTL;
				this.Pause();
				return;
			}
			else
			{
				if(this.ID.scrollLeft <= 0)
				{
					this.ID.scrollLeft += this.ClientScroll;
				}
				this.ID.scrollLeft -= this.Step;
			}
		break;
	}
}
//-->