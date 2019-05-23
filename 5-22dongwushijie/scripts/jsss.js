
let i =document.querySelector('img');
    //提取图片元素 为 变量 i
    i.onclick=function(){
    //点击i 运行函数
    let mysrc=i.getAttribute('src');
        //把i的地址 定义为 变量mysrc
    if (mysrc==='images/ying.jpg'){
        //地址为2
     i.setAttribute('src','images/bao.jpg')}
        //改为1
    else{i.setAttribute('src','images/ying.jpg')}
    }

    function sethead(name){
        let a1=document.querySelector('h1');
        a1.textContent='你好'+name+'，欢迎来到动物世界！';
    }
    //声明标题函数（name),标题=你好+name
    
    function setname(){
        let a2=prompt('请输入您的名字');
        localStorage.setItem('name',a2);
        sethead(a2);
    }
    //声明起名函数（），输入作为变量，变量保存并启动标题函数
    
    let a3=localStorage.getItem('name');
    if(!a3){
        setname;
    }else{
        sethead(a3);
    }
    //获取本地name，不存在启动起名函数，存在启动标题函数
    
    let b=document.querySelector('button');
    b.onclick=setname;

