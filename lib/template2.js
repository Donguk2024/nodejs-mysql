var url = require('url');

module.exports = {
  homepage_login:function(title, list, request){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            *{
                margin: 0;
            }
            body {
                font-family: Arial, sans-serif;
            }
            .header-content {
                display: flex;
                justify-content: space-between; /* 왼쪽과 오른쪽으로 정렬 */
                background-color: #007bff;
                color: #fff;
                padding: 1rem;
            }
            .header-content h1 {
                margin: 0; /* 기본 마진 제거 */
            }
            .header-content p {
                padding-bottom: 10px;
            }
            .write-post, .post-list {
                margin-bottom: 20px;
            }
    
            button {
                background-color: #333;
                color: #fff;
                padding: 10px 20px;
                border: none;
                cursor: pointer;
            }
    
            button:hover {
                background-color: #555;
            }
            table{
              border-collapse: collapse;
            }
            td{
              border: 1px solid black;
            }
            a{
                color:inherit;
                text-decoration: none; 
            }
        </style>
    </head>
    <body>
        <div class="header-content">
            <h1>게시판</h1>
            <div>
                <a href="/login">로그인</a>     
            </div>
        </div>
        <div>
            ${list}
        </div>
    </body>
    </html>
    `;
  },homepage_logout:function(title, list, request){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            *{
                margin: 0;
            }
            body {
                font-family: Arial, sans-serif;
            }
            .header-content {
                display: flex;
                justify-content: space-between; /* 왼쪽과 오른쪽으로 정렬 */
                background-color: #007bff;
                color: #fff;
                padding: 1rem;
            }
            .header-content h1 {
                margin: 0; /* 기본 마진 제거 */
            }
            .header-content p {
                padding-bottom: 10px;
            }
            .write-post, .post-list {
                margin-bottom: 20px;
            }
    
            button {
                background-color: #333;
                color: #fff;
                padding: 10px 20px;
                border: none;
                cursor: pointer;
            }
    
            button:hover {
                background-color: #555;
            }
            table{
              border-collapse: collapse;
            }
            td{
              border: 1px solid black;
            }
            a{
                color:inherit;
                text-decoration: none; 
            }
        </style>
    </head>
    <body>
        <div class="header-content">
            <h1>게시판</h1>
            <div>
                <p>환영합니다. ${queryData.name}님</p>
                <a href="/">로그아웃</a> <!-- 로그아웃 링크 추가 -->   
                <a href="/homepage/application?user=${queryData.name}">지원확인</a>    
            </div>
        </div>
        <div>
            ${list}
        </div>
        <div>
            <section class="write-post">
                <form action="/homepage/writing?name=${queryData.name}" method="post">
                  <button>글쓰기</button>
                </form>
            </section>
        </div>
    </body>
    </html>`
  },login:function(title){
    return `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f5f5f5;
            }
    
            .login-container {
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                padding: 20px;
                text-align: center;
            }
    
            h1 {
                margin-bottom: 20px;
            }
    
            form {
                display: flex;
                flex-direction: column;
            }
    
            label {
                margin-bottom: 5px;
                font-weight: bold;
            }
    
            input {
                padding: 10px;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
    
            button {
                padding: 10px;
                margin-bottom: 10px;
                background-color: #007bff;
                color: #fff;
                border: none;
                border-radius: 3px;
                cursor: pointer;
                text-align: center;
            }
    
            button:hover {
                background-color: #0056b3;
            }
            .button-link {
                display: inline-block;
                padding: 10px 20px;
                background-color: #007bff;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                width: 100%;
                transition: background-color 0.2s;
            }
            .button-link:hover{
                background-color: #0056b3;
            }
            a{
                color:inherit;
                text-decoration: none; 
            }
        </style>
    </head>
    <body>
      <div class="login-container">
        <h1><a href="/login">로그인</a></h1>
        <form action="/login_process" method="post">
          <label for="username">아이디</label>
          <input type="text" id="username" name="username" required>
          
          <label for="password">비밀번호</label>
          <input type="password" id="password" name="password" required>
          
          <button type="submit">로그인</button>
        </form>
        <button class="button-link" onclick="location.href='signup.html'">회원가입</button>
      </div>
    </body>
    </html>`
  },signup:function(title){
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f5f5f5;
        }
    
        .signup-container {
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          max-width: 600px;
          max-height: 600px;
          width: 100%;
          height: 100%;
        }
    
        h1 {
          margin-bottom: 20px;
        }
    
        form {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
    
        label {
          margin-bottom: 10px;
          font-weight: bold;
          text-align: left;
    
        }
    
        input, select {
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }
    
        button {
          padding: 10px;
          margin-top: 160px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }
    
        button:hover {
          background-color: #0056b3;
        }
        a{
            color:inherit;
            text-decoration: none; 
        }
      </style>
    </head>
    <body>
      <div class="signup-container">
        <h1><a href="/login">회원가입</a></h1>
        <form action="/signup_process" method="post">
          <label for="name">이름</label>
          <input type="text" id="name" name="name" required>
    
          <label for="username">아이디</label>
          <input type="text" id="username" name="username" required>
          
          <label for="password">비밀번호</label>
          <input type="password" id="password" name="password" required>
          
          <label for="major">전공</label>
          <select name="major">
            <option>글</option>
            <option>그림</option>
            <option>코딩</option>
          </select>
             
          <button type="submit">가입하기</button>
        </form>
      </div>
    </body>
    </html>
    `
  }, write:function(title, request){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;  
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
    
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                padding: 20px;
            }
    
            textarea {
                font-size: 20px;
            }
    
            .write-post {
                background-color: #fff;
                border-radius: 5px;
                padding: 20px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            }
    
            .write-post h2 {
                font-size: 24px;
                margin-bottom: 10px;
            }
    
            .write-post form {
                display: flex;
                flex-direction: column;
            }
    
            .write-post label {
                font-weight: bold;
                margin-bottom: 5px;
            }
    
            .write-post input[type="text"],
            .write-post textarea {
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
            .writer_name input[type="text"] {
                border: none; /* 테두리 없애기 */
                outline: none; /* 포커스 효과 없애기 */
            }
    
            .title_name input[type="text"] {
                width: 45%; /* 원하는 너비로 조정 (예: 100%) */
            }
    
            .write-post button {
                background-color: #007bff;
                color: #fff;
                padding: 10px;
                border: none;
                border-radius: 3px;
                cursor: pointer;
            }
    
            .write-post button:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="write-post">
            <h2>글 작성하기</h2>
            <form action="/write_process" method="post">
                <div class = "writer_name">
                    <label for="title">작성자:</label>
                    <input type="text" id="writer" name="writer" value="${queryData.name}" readonly>
                </div>
                <div class = "title_name">
                    <label for="title">제목:</label>
                    <input type="text" id="title" name="title" required maxlength="50">   
                </div>
                <label for="content">내용</label>
                <textarea id="content" name="content" rows="5" style="resize: none;" required maxlength="300"></textarea>
    
                <button type="submit">글 작성</button>
            </form>
        </div>
    </body>
    </html>
    `
  }, homepageTable:function(write, request){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var tag = '<table>';
    var i = 0;
    while(i < write.length){
        tag += `<tr>
                    <td>${write[i].writeNum}</td>
                    <td><a href = "/homepage/surfing?name=${write[i].name}&id=${write[i].writeNum}&user=${queryData.name}">${write[i].title}</a></td>
                    <td>${write[i].name}</td>
                    <td>${write[i].formatted_datetime}</td>
                </tr>
                `
        i++;
    }
    tag += '</table>'
    return tag;
  }, surfing:function(title, result, request){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;

    if(queryData.user === "undefined"){
        var buttonDisplay1 = ' style="display:none"'
        var buttonDisplay2 = ' style="display:none"'
        var buttonDisplay3 = ' '
    }
    else if(queryData.user === queryData.name){
        var buttonDisplay1 = ' style="display:none"'
        var buttonDisplay2 = ' '
        var buttonDisplay3 = `?name=${queryData.user}`
    }
    else{
        var buttonDisplay1 = ' '
        var buttonDisplay2 = ' style="display:none"'
        var buttonDisplay3 = `?name=${queryData.user}`
    }

    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
    
            a{
                color:inherit;
                text-decoration: none; 
            }
    
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                padding: 20px;
            }
    
            textarea {
                font-size: 20px;
            }
    
            .write-post {
                background-color: #fff;
                border-radius: 5px;
                padding: 20px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            }
    
            .write-post h2 {
                font-size: 24px;
                margin-bottom: 10px;
            }
    
            .write-post form {
                display: flex;
                flex-direction: column;
            }
    
            .write-post label {
                font-weight: bold;
                margin-bottom: 5px;
            }
    
            .write-post input[type="text"],
            .write-post textarea {
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
            .writer_name input[type="text"],.title_name input[type="text"],.write-post textarea, .button-container a {
                border: none; /* 테두리 없애기 */
                outline: none; /* 포커스 효과 없애기 */
            }
    
            .button-container a {
                background-color: #007bff;
                color: #fff;
                text-align: center;
                padding-top: 10px;
                padding-bottom: 10px;
                padding-left: 100px;
                padding-right: 100px;
                border: none;
                border-radius: 3px;
                cursor: pointer;
            }
    
            .button-container a:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="write-post">
            <form>
                <div class = "writer_name">
                    <label for="title">작성자:</label>
                    <input type="text" id="writer" name="writer" value="${result[0] ? result[0].name : '작성자 정보 없음'}" readonly>
                </div>
                <div class = "title_name">
                    <label for="title">제목:</label>
                    <input type="text" id="title" name="title" value="${result[0] ? result[0].title : '제목 정보 없음'}" readonly>   
                </div>
                <label for="content">내용</label>
                <textarea id="content" name="content" rows="5" style="resize:none;" readonly>${result[0] ? result[0].content : '내용 정보 없음'}</textarea>
                <div class="button-container">
                    <a href="/homepage/applying?user=${queryData.user}&applying=${queryData.name}"${buttonDisplay1}">지원서 작성</a>
                    <a href="/homepage/updating?name=${queryData.user}&id=${queryData.id}"${buttonDisplay2}>수정</a>
                    <a href="/${buttonDisplay3}">뒤로 가기</a>
                </div>    
            </form>
        </div>
    </body>
    </html>`
  }, applying:function(title, result, request){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;  
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
    
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                padding: 20px;
            }
    
            textarea {
                font-size: 20px;
            }
    
            .write-post {
                background-color: #fff;
                border-radius: 5px;
                padding: 20px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            }
    
            .write-post h2 {
                font-size: 24px;
                margin-bottom: 10px;
            }
    
            .write-post form {
                display: flex;
                flex-direction: column;
            }
    
            .write-post label {
                font-weight: bold;
                margin-bottom: 5px;
            }
    
            .write-post input[type="text"],
            .write-post textarea {
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
            .writer_name input[type="text"]{
                border: none; /* 테두리 없애기 */
                outline: none; /* 포커스 효과 없애기 */
            }
    
            .write-post button {
                background-color: #007bff;
                color: #fff;
                padding: 10px;
                border: none;
                border-radius: 3px;
                cursor: pointer;
                text-align: center;
            }
    
            .write-post button:hover {
                background-color: #0056b3;
            }

            .title_name input[type="text"] {
                width: 45%; /* 원하는 너비로 조정 (예: 100%) */
            }
    
        </style>
    </head>
    <body>
        <div class="write-post">
            <h2>글 작성하기</h2>
            <form action="/apply_process" method="post">
                <div class = "writer_name">
                    <label for="title">지원자:</label>
                    <input type="text" id="applier" name="applier" value="${queryData.user}" readonly>
                </div>
                <div class = "writer_name">
                    <label for="title">지원받는사람:</label>
                    <input type="text" id="writer" name="writer" value="${queryData.applying}" readonly>
                </div>
                <div class = "writer_name">
                    <label for="title">지원 항목:</label>
                    <input type="text" id="major" name="major" value="${result[0].major}" readonly>
                </div>
                <div class = "title_name">
                    <label for="title">제목:</label>
                    <input type="text" id="title" name="title"  required maxlength="50">   
                </div>
                <label for="content">내용</label>
                <textarea id="content" name="content" rows="5" style="resize: none;" required maxlength="300"></textarea>
    
                <button type="submit">지원</button>
            </form>
        </div>
    </body>
    </html>
    `
  }, update:function(title, request, result){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;  
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
    
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                padding: 20px;
            }
    
            textarea {
                font-size: 20px;
            }
    
            .write-post {
                background-color: #fff;
                border-radius: 5px;
                padding: 20px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            }
    
            .write-post h2 {
                font-size: 24px;
                margin-bottom: 10px;
            }
    
            .write-post form {
                display: flex;
                flex-direction: column;
            }
    
            .write-post label {
                font-weight: bold;
                margin-bottom: 5px;
            }
    
            .write-post input[type="text"],
            .write-post textarea {
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
            .writer_name input[type="text"] {
                border: none; /* 테두리 없애기 */
                outline: none; /* 포커스 효과 없애기 */
            }
    
            .title_name input[type="text"] {
                width: 45%; /* 원하는 너비로 조정 (예: 100%) */
            }
    
            .write-post button {
                background-color: #007bff;
                color: #fff;
                padding: 10px;
                border: none;
                border-radius: 3px;
                cursor: pointer;
            }
    
            .write-post button:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="write-post">
            <h2>글 수정하기</h2>
            <form action="/update_process" method="post">
                <div style="display: none;">
                    <input type="text" id="write_id" name="write_id" value="${queryData.id}" readonly>
                </div>
                <div class = "writer_name">
                    <label for="title">작성자:</label>
                    <input type="text" id="writer" name="writer" value="${queryData.name}" readonly>
                </div>
                <div class = "title_name">
                    <label for="title">제목:</label>
                    <input type="text" id="title" name="title" required maxlength="50" value="${result[0] ? result[0].title : '제목 정보 없음'}">   
                </div>
                <label for="content">내용</label>
                <textarea id="content" name="content" rows="5" style="resize: none;" required maxlength="300">${result[0] ? result[0].content : '내용 정보 없음'}</textarea>
    
                <button type="submit">글 수정</button>
            </form>
        </div>
    </body>
    </html>
    `
  }, applicationTable:function(apply, apply2, request){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var tag = '<h2>지원자 확인</h2><table>';
    var i = 0;
    var result;
    while(i < apply.length){
        if(apply[i].apply_result == "수락"){
            result = 1;
        }
        else if(apply[i].apply_result == "거절"){
            result = 2;
        }
        else if(apply[i].apply_result == "확정"){
            result = 3;
        }
        else if(apply[i].apply_result == "지원취소"){
            result = 4;
        }else{
            result = 5;
        }

        tag += `<tr>
                    <td>${i+1}</td>
                    <td><a href = "/homepage/checking?name=${apply[i].user}&id=${apply[i].idapplys}&user=${queryData.user}&result=${result}">${apply[i].apply_title}</a></td>
                    <td>${apply[i].user}</td>
                    <td>${apply[i].formatted_datetime}</td>
                    <td>${apply[i].apply_result}</td>
                </tr>
                `
        i++;
    }
    tag += '</table>'
    tag += '<br><h2>지원 결과 확인</h2><table>'
    i = 0;
    while(i < apply2.length){

        if(apply2[i].apply_result == "수락"){
            result = 1;
        }
        else if(apply2[i].apply_result == "거절"){
            result = 2;
        }
        else if(apply2[i].apply_result == "확정"){
            result = 3;
        }
        else if(apply2[i].apply_result == "지원취소"){
            result = 4;
        }else{
            result = 5;
        }

        tag += `<tr>
                    <td>${i+1}</td>
                    <td><a href = "/homepage/checking?name=${apply2[i].user}&id=${apply2[i].idapplys}&user=${queryData.user}&result=${result}">${apply2[i].apply_title}</a></td>
                    <td>${apply2[i].applied_user}</td>
                    <td>${apply2[i].formatted_datetime}</td>
                    <td>${apply2[i].apply_result}</td>
                </tr>
                `
        i++;
    }
    tag += '</table>'

    return tag;
  }, application:function(title, list, request){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;

    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            *{
                margin: 0;
            }
            body {
                font-family: Arial, sans-serif;
            }
            .header-content {
                display: flex;
                justify-content: space-between; /* 왼쪽과 오른쪽으로 정렬 */
                background-color: #007bff;
                color: #fff;
                padding: 1rem;
            }
            .header-content h1 {
                margin: 0; /* 기본 마진 제거 */
            }
            .header-content p {
                padding-bottom: 10px;
            }
            .write-post, .post-list {
                margin-bottom: 20px;
            }
    
            button {
                background-color: #333;
                color: #fff;
                padding: 10px 20px;
                border: none;
                cursor: pointer;
            }
    
            button:hover {
                background-color: #555;
            }
            table{
              border-collapse: collapse;
            }
            td{
              border: 1px solid black;
            }
            a{
                color:inherit;
                text-decoration: none; 
            }
        </style>
    </head>
    <body>
        <div class="header-content">
            <h1>지원확인</h1>
            <div>
                <p>환영합니다. ${queryData.user}님</p>
                <a href="/">로그아웃</a>    
                <a href="/?name=${queryData.user}">돌아가기</a> 
            </div>
        </div>
        <div>
            ${list}
        </div>
    </body>
    </html>`
  }, checking:function(title, result, request){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;


    if(queryData.user === queryData.name){
        if(queryData.result === "1"){
            var buttonDisplay1 = ' style="display:none"'
            var buttonDisplay2 = ' style="display:none"'
            var buttonDisplay3 = ' '
            var buttonDisplay4 = ' '
            var AllDisplay = ' '
            var resultMsg = " "
        }else if(queryData.result === "2"){
            var AllDisplay = ' style="display:none"'
            var resultMsg = "거절되셨습니다. 지원해주셔서 감사합니다."
        }
       else if(queryData.result === "3"){
            var AllDisplay = ' style="display:none"'
            var resultMsg = "합격하셨습니다! 채팅창으로 이동해 주세요."
        }
        else{
            var buttonDisplay3 = ' style="display:none"'
            var buttonDisplay4 = ' '
            var buttonDisplay1 = ' style="display:none"'
            var buttonDisplay2 = ' style="display:none"'
            var resultMsg = " "
        }
    }
    else{        
        if(queryData.result === "1"){
            var buttonDisplay1 = ' style="display:none"'
            var buttonDisplay2 = ' '
            var buttonDisplay3 = ' style="display:none"'
            var buttonDisplay4 = ' style="display:none"'
            var AllDisplay = ' '
            var resultMsg = " "
        }else if(queryData.result === "2"){
            var buttonDisplay2 = ' style="display:none"'
            var buttonDisplay1 = ' '
            var buttonDisplay3 = ' style="display:none"'
            var buttonDisplay4 = ' style="display:none"'
            var AllDisplay = ' '
            var resultMsg = " "
        }      
        else if(queryData.result === "3"){
            var AllDisplay = ' style="display:none"'
            var resultMsg = "합격하셨습니다! 채팅창으로 이동해 주세요."
        }
        else if(queryData.result === "4"){
            var AllDisplay = ' style="display:none"'
            var resultMsg = "상대방이 지원을 취소했습니다."
        }
        else{
            var buttonDisplay1 = ' '
            var buttonDisplay2 = ' '
            var buttonDisplay3 = ' style="display:none"'
            var buttonDisplay4 = ' style="display:none"'
            var resultMsg = " "
        }
    }

    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
    
            a{
                color:inherit;
                text-decoration: none; 
            }
    
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                padding: 20px;
            }
    
            textarea {
                font-size: 20px;
            }
    
            .write-post {
                background-color: #fff;
                border-radius: 5px;
                padding: 20px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            }
    
            .write-post h2 {
                font-size: 24px;
                margin-bottom: 10px;
            }
    
            .write-post form {
                display: flex;
                flex-direction: column;
            }
    
            .write-post label {
                font-weight: bold;
                margin-bottom: 5px;
            }
    
            .write-post input[type="text"],
            .write-post textarea {
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
            .writer_name input[type="text"],.title_name input[type="text"],.write-post textarea, .button-container a {
                border: none; /* 테두리 없애기 */
                outline: none; /* 포커스 효과 없애기 */
            }
    
            .button-container a {
                background-color: #007bff;
                color: #fff;
                text-align: center;
                padding-top: 10px;
                padding-bottom: 10px;
                padding-left: 100px;
                padding-right: 100px;
                border: none;
                border-radius: 3px;
                cursor: pointer;
            }
    
            .button-container a:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="write-post">
            <form>
                <div class = "writer_name">
                    <label for="title">작성자:</label>
                    <input type="text" id="writer" name="writer" value="${result[0] ? result[0].user : '작성자 정보 없음'}" readonly>
                </div>
                <div class = "title_name">
                    <label for="title">제목:</label>
                    <input type="text" id="title" name="title" value="${result[0] ? result[0].apply_title : '제목 정보 없음'}" readonly>   
                </div>
                <label for="content">내용</label>
                <textarea id="content" name="content" rows="5" style="resize:none;" readonly>${result[0] ? result[0].apply_content : '내용 정보 없음'}</textarea>
                <div><p>${resultMsg}</p></div>
                <br>
                <div class="button-container"${AllDisplay}>
                    <a href="/pass_process?id=${queryData.id}&user=${queryData.user}"${buttonDisplay1} onclick="return confirm('지원을 수락하시겠습니까?')">지원 수락</a>
                    <a href="/reject_process?id=${queryData.id}&user=${queryData.user}"${buttonDisplay2}  onclick="return confirm('지원을 거절하시겠습니까?')">지원 거절</a>
                    <a href="/team_process?id=${queryData.id}&user=${queryData.user}"${buttonDisplay3}  onclick="return confirm('팀에 합류하시겠습니까?')">팀 확정</a>
                    <a href="/teamReject_process?id=${queryData.id}&user=${queryData.user}"${buttonDisplay4}  onclick="return confirm('지원을 취소하겠습니까?')">지원 취소</a>
                </div> 
                <br>
                <div class="button-container">
                    <a href="/homepage/application?user=${queryData.user}">뒤로 가기</a>
                </div>      
            </form>
        </div>
    </body>
    </html>`
  }
}
