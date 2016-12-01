let Nav = React.createClass({
    render(){
        let style={
            "font-weight": "600",
            "font-family":"Menlo, Monaco, Consolas, 'Courier New', monospace",
            "font-style": "normal",
            "font-size": "16px"
        };
        let styleActive={
            "background":"#5bbc2e"
        };
            return <ul className="nav nav-pills" role="tablist">
                        <li role="presentation" className="active" style={styleActive}><a href="#">主页</a></li>
                        <li role="presentation"><a href="#from">自我介绍</a></li>
                        <li role="presentation"><a href="#project">项目经验</a></li>
                        <li role="presentation" className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                更多 <span className="caret"></span>
                            </a>
                            <ul style={style} className="dropdown-menu" role="menu">
                                <li><a href="#technology">技术自我打分</a></li>
                                <li><a href="#future">未来规划</a></li>
                                <li className="divider"></li>
                                <li><a href="https://github.com/dearzoe"  style={style} target="_blank">MyGitHub</a></li>
                            </ul>
                        </li>
                    </ul>
    }
});
let Jumbotron = React.createClass({
    render(){
        let styleFuture={
            "margin-top":"100px",
            "text-align": "center",
            "font-weight": "900",
            "color": "#5bbc2e",
            "font-size": "70px",
            "line-height": "70px"
        };
        let styleResume={
            "margin-top":"30px",
            "text-align":"center"
        };
       return   <div className="jumbotron">
           <h1 style={styleFuture}>Hello,MyFuture!</h1>
           <p style={styleResume}>This is my resume for introduce myself~</p>
           <p style={styleResume}><a className="btn btn-primary btn-lg btn-success" href="#from" role="button">start</a></p>
       </div>
    }
});
let FormMe = React.createClass({
   render(){
       let warning={
         "color":"red"
       };
       let more={
          "font-size":"10px",
          "color":"#5bbc2e"
       };
       return <div id="from">
                 <div className="panel panel-default">
                   <div className="panel-heading">自我介绍</div>
                   <div className="panel-body">
                       <p>开场很直接，我直接说一下我的经历吧，大学学的不是计算机专业的我抱着对计算机的热爱喜欢上了IT行业，毕业后有报培训班系统学习web前端，所以对于坚持想要本专业以及不喜欢培训出来的Leader当您看到这个<span style={warning}>***</span>重点标识符的时候就可以关上网页继续寻找您的理想下属了。在这一年多的工作中，自己主要负责使用easyui框架写前端页面，以及JS处理前后台的数据。因为是国企，工作并不忙，所以平时也有接一些其他的工作，和朋友合作一些其他项目，包括App,H5以及一些企业建站等项目，也让自己没有把基础的忘记，并且平时有自学一些自己感兴趣的东西，像React,es6,Webpack,Gulp等<a href="#technology" style={more}>更多/技术自我打分</a></p>
                 </div>
                 <table className="table table-bordered">
                     <thead>
                       <tr className="active">
                           <th className="col-md-3">姓名</th>
                           <th className="col-md-3">工作年限</th>
                           <th className="col-md-3">求职意向</th>
                           <th className="col-md-3">期望薪资</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                           <td>胡文哲</td>
                           <td>一年半</td>
                           <td>Wed前端(希望是React方向)</td>
                           <td>8-10K</td>
                       </tr>
                     </tbody>
                     <tbody>
                       <tr className="warning">
                           <th className="col-md-3">学历</th>
                           <th className="col-md-3">住址</th>
                           <th className="col-md-3">电话</th>
                           <th className="col-md-3">邮箱</th>
                       </tr>
                     </tbody>
                     <tbody>
                       <tr>
                           <td>本科</td>
                           <td>13号线</td>
                           <td>15910377030</td>
                           <td>825846102@qq.com</td>
                       </tr>
                     </tbody>
                 </table>
       </div>
       </div>
   }
});
let Project = React.createClass({
    render(){
       return<div id="project" className="row">
               <div className="col-sm-6 col-md-4">
                   <div className="thumbnail">
                       <img src="./img/3.png" alt="..." />
                           <div className="caption">
                               <h3>BIM</h3>
                               <p>企业内部项目</p>
                               <p><a href="http://www.crrcgc.cc/g11718.aspx" className="btn btn-primary" role="button">项目介绍</a> <a href="#" data-toggle="modal" data-target="#after" className="btn btn-default" role="button">Button</a></p>
                           </div>
                   </div>
                   </div>
                   <div className="col-sm-6 col-md-4">
                       <div className="thumbnail">
                           <img src="./img/2.png" alt="..." />
                           <div className="caption">
                               <h3>MDM3.0</h3>
                               <p>企业内部项目</p>
                               <p><a href="http://www.crrcgc.cc/g11719.aspx" className="btn btn-primary" role="button">项目介绍</a> <a href="#" className="btn btn-default" data-toggle="modal" data-target="#after" role="button">Button</a></p>
                           </div>
                       </div>
                   </div>
                   <div className="col-sm-6 col-md-4">
                       <div className="thumbnail">
                           <img src="./img/1.jpg" alt="..." />
                           <div className="caption">
                               <h3>BOMCenter</h3>
                               <p>企业内部项目</p>
                               <p><a className="btn btn-danger" data-toggle="modal" data-target="#about" role="button">项目介绍</a> <a href="#" className="btn btn-default" role="button" data-toggle="modal" data-target="#after">Button</a></p>
                           </div>
                       </div>
                   </div>
           </div>
    }
});
let ProjectFrom=React.createClass({
   componentDidMount(){
       $(function () {
           $('#myTab a:last').tab('show')
       })
    },
   render(){
      return <div>
                  <ul className="nav nav-tabs" role="tablist" id="myTab">
                      <li role="presentation" className="active"><a href="#home" role="tab" data-toggle="tab">金大地</a></li>
                      <li role="presentation"><a href="#profile" role="tab" data-toggle="tab">嘟嘟医生</a></li>
                      <li role="presentation"><a href="#messages" role="tab" data-toggle="tab">立川离心机</a></li>
                      <li role="presentation"><a href="#settings" role="tab" data-toggle="tab">Settings</a></li>
                  </ul>
                  <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active" id="home">
                          <table className="table table-hover">
                              <tbody>
                              <tr>
                                  <td>名称</td>
                                  <td>职责</td>
                                  <td>描述</td>
                                  <td>域名</td>
                              </tr>
                              </tbody>
                              <tbody>
                              <tr>
                                  <td>金大地地产</td>
                                  <td>根据psd图纸实现web页面以及js</td>
                                  <td><a href="http://www.jddjt.com/About.asp?id=1" target="_blank">江苏金大地房地产开发有限责任公司是... </a></td>
                                  <td><a href="http://www.jddjt.com/" target="_blank">http://www.jddjt.com/</a></td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="profile">
                          <table className="table table-hover">
                              <tbody>
                              <tr>
                                  <td>名称</td>
                                  <td>职责</td>
                                  <td>描述</td>
                                  <td>域名</td>
                              </tr>
                              </tbody>
                              <tbody>
                              <tr>
                                  <td>嘟嘟医生</td>
                                  <td>根据psd图纸实现web页面以及js</td>
                                  <td><a href="http://www.ziseyiliao.com/about-us.html" target="_blank">致力于搭建微信医患服务平台，根据... </a></td>
                                  <td><a href="http://www.ziseyiliao.com/" target="_blank">http://www.ziseyiliao.com/</a></td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="messages">
                          <table className="table table-hover">
                              <tbody>
                              <tr>
                                  <td>名称</td>
                                  <td>职责</td>
                                  <td>描述</td>
                                  <td>域名</td>
                              </tr>
                              </tbody>
                              <tbody>
                              <tr>
                                  <td>立川离心机</td>
                                  <td>根据psd图纸实现web页面以及js</td>
                                  <td><a href="http://www.lch-centrifuge.com/about.php?pid=2" target="_blank">立川卧螺离心机 在固液分离应用中性能优异... </a></td>
                                  <td><a href="http://www.lch-centrifuge.com/" target="_blank">http://www.lch-centrifuge.com/</a></td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="settings">
                          <table className="table table-hover">
                              <tbody>
                              <tr>
                                  <td>名称</td>
                                  <td>职责</td>
                                  <td>描述</td>
                                  <td>域名</td>
                              </tr>
                              </tbody>
                              <tbody>
                              <tr>
                                  <td>金大地地产</td>
                                  <td>根据psd图纸实现web页面以及js</td>
                                  <td><a href="http://www.elboo.cn/list.php?pid=1&ty=9" target="_blank">作为德国品牌，ELBOO产品秉承德国精益求精... </a></td>
                                  <td><a href="http://www.elboo.cn/" target="_blank">http://www.elboo.cn/</a></td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
             </div>
   }
});
let Technology = React.createClass({
    render(){
        let style50={
            "width":"50%"
        };
        let style60={
            "width":"60%"
        };
        let style70={
            "width":"70%"
        };
        let style80={
            "width":"80%"
        };
        return <div id="technology">
            <div className="panel page-header">自我评价各项技能熟练度</div>
            <div className="progress">
                <div className="progress-bar progress-bar-success " role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={style80}>
                    javascript+jQuery 8分
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-info " role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={style80}>
                    html5+css3+Bootstrap 8分
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-warning " role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={style70}>
                    React+React-Router+Easyui 7分
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-danger " role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={style60}>
                    node 6分
                </div>
            </div>
            <div className="panel panel-footer">还有一些了解平时有关注过的,也能简单使用
                <span className="label label-default">Angule1</span>
                <span className="label label-primary">Vue</span>
                <span className="label label-success">gulp</span>
                <span className="label label-info">webpack</span>
                <span className="label label-warning">Zepto</span>
                <span className="label label-danger">Swiper</span></div>

        </div>
    }
});
let Future =React.createClass({
    render(){
        return <div id="future">
                 <div className="panel page-header">
                     对于未来的规划
                 </div>
                 <div className="panel page-body">
                     首先是先是对未来的工作的一个期望，就是希望自己能够长时间在一家公司能够不断的进步，以及想不断地的挑战自己，同时考取一些证书，像PMP之类的，并且与公司共同成长。
                 </div>
               </div>
    }
});
let Footer = React.createClass({
    render(){
        let style={
            "border-top": "1px solid #e5e5e5",
            "background": "#202020",
            "color":"#FFFFFF",
            "text-align":"center"
        };
        let ulStyle={
            "list-style":"none"
        };
        let end={
            "float":"right"
        };
        return <div style={style} className="main-footer" role="contentinfo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                 <h4>相关网站链接</h4>
                                 <ul style={ulStyle}>
                                     <li><a href="http://www.bootcss.com/" target="_blank">Bootstrap中文网</a></li>
                                     <li><a href="http://www.crrcgc.cc/g11719.aspx" target="_blank">中车官网</a></li>
                                     <li><a href="https://facebook.github.io/react/docs/hello-world.html" target="_blank">React</a></li>
                                     <li><a href="https://github.com/" target="_blank">GitHub</a></li>
                                 </ul>
                            </div>
                            <div className="col-lg-6">

                            </div>
                        </div><span class="label label-default" style={end}>@huwenzhe 2016.12.1 02:09</span>
                    </div>
               </div>
    }
});




let AppMain=React.createClass({
    render(){
      return <div>
                <div className="container">
                   <Nav/>
                </div>
                <Jumbotron/>
                <div className="container">
                   <FormMe/>
                   <Project/>
                   <ProjectFrom/>
                   <Technology/>
                   <Future/>
                </div>
                <Footer/>
             </div>
    }
});

ReactDOM.render(
    <AppMain/>,
    document.getElementById("app")
);