import EXIF from "exif-js";
import {md5} from "./utlis.js"
import {imgChoosing} from "./common.js"
const choose_Img = (fileList,imgArr,imgNumLimit,imgEle,cb) => {
    let imgAdd = [];
    let base = "";
    let imgNum = fileList.length; //图片选择的张数
    if(imgArr.length + imgArr.length > imgNumLimit ){
        alert("最多只能上传"+imgNumLimit+"张图片!")
        return;
    }
    let Orientation;
    for(let i=0;i<imgNum;i++){
        EXIF.getData(fileList[i],function(){
            Orientation = EXIF.getTag(fileList[i],"Orientation") //获取图片的摄像方向
        })
        let reader = new FileReader();
        reader.readAsDataURL(fileList[i]); //将图片读取为DataURL 无论时候读取成功 均不会返回结果  结构会在result属性中
        // console.log(reader.readAsDataURL(fileList[i]));
        reader.onload = function (e) { //当文件读取成功时触发 其中event.target.result就存储了图片读取的dataurl
            let image = new Image();
            image.src = e.target.result;//返回的是一个base64
            base = e.target.result;
            image.onload = function () { //当图片加载完毕后执行
                // image.onload函数的this指的是一个img标签 有src属性 属性值为e.target.result
                let expectWidth = this.naturalWidth;
                let expectHeight = this.naturalHeight; //获取图片的宽度和高度
                // if(this.naturalWidth > this.naturalHeight && this.naturalWidth > 800){
                //     // 当宽度大于高度 并且是宽度大于800时
                //     expectWidth = 800;
                //     expectHeight = expectWidth * this.naturalHeight/this.naturalWidth;
                // }else if(this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200){
                //     // 当高度大于宽度 并且是高度大于1200时
                //     expectHeight = 1200;
                //     expectWidth = expectHeight * this.naturalWidth/this.naturalHeight
                // }
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext('2d');
                canvas.width = expectWidth;
                canvas.height = expectHeight;
                ctx.drawImage(this,0,0,expectWidth,expectHeight);
                var base64 = null;
                // 修复ios上传图片时候 被旋转的问题
                if(Orientation != "" && Orientation != 1){ //Orientation除了为1其他都需要旋转
                    switch(Orientation){
                        case 6: //需要顺时针（向左）90度旋转
                            rotateImg(this,"left",canvas);
                            break;
                        case 8: //需要逆时针 90度旋转
                            rotateImg(this,"right",canvas);
                            break;
                        case 3: //需要180度旋转
                            rotateImg(this,"right",canvas);
                            rotateImg(this,"right",canvas);
                            break;
                    }
                }
                base64 = canvas.toDataURL("iamge/jpeg",0.01);
                imgAdd.push({"src":base64});
                // 用$on 做
                imgChoosing.$emit("imgAdd",imgAdd)
                // 用回调函数做
                // cb(imgAdd);
                // if(fileList[i].size/1024000 > 1) { //解决当图片的size过大时的操作
                //     imgScale(base64,4);
                // }else {
                //     imgArr.push({"src":base64});
                // }
            }
        }
    } 
}
const imgScale = function (imgUrl,quality) { //当图片的大小过大时 改变图片的大小 
    let img = new Image();
    let _this = this;
    let canvas =  document.createElement('canvas');
    let ctx = canvas.getContext("2d");
    img.src = imgUrl;
    img.onload =  function () {
        let width = img.naturalWidth/quality;
        let height = img.naturalHeigth/quality;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(this,0,0,width,height,0.95);
        _this.imgArr.push({"src":canvas.toDataURL()});
    }
}
const rotateImg = function (img,direction,canvas) {
    var min_step = 0;
    var max_step = 0;
    if(img == null) return;
    var height = img.height;
    var width = img.width;
    var step = 2;
    if(step == null) {
        step = min_step;
    }
    if(direction == "right") {
        step ++;
        step > max_step && (step = min_step);
    }
    else {
        step--;
        step < min_step && (step = max_step);
    }
     var degree = step * 90 * Math.PI / 180;
    var ctx = canvas.getContext('2d');
    switch (step) {
        case 0:
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0);
            break;
        case 1:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, 0, -height);
            break;
        case 2:
            canvas.width = width;
            canvas.height = height;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, -height);
            break;
        case 3:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, 0);
            break;
        }
    }
export default{
    choose_Img,
    imgScale,
    rotateImg
}