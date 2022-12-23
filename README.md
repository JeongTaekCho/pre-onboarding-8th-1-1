# 원티드 프리온보딩 8th - 1주차 과제

[![React Version](https://img.shields.io/badge/React-v18.2.0-blue)](https://ko.reactjs.org/)
[![Package Manager Version](https://img.shields.io/badge/npm-v8.12.1-yellow)](https://www.npmjs.com/)

원티드 프리온보딩 프론트엔드 인턴쉽 과정의 선발과제를 팀 단위로 진행 해보면서 동료학습을 경험하고 <br />이를 바탕으로 Best Practice 를 도출해내는 과제를 수행했습니다.

### 🗓 수행 기간

> 2022.12.20 - 2022.12.23

### 📢 배포 링크

> http://pre-todo-list.s3-website.ap-northeast-2.amazonaws.com/

<br />

## 📚 목차

- [팀 정보](#팀-정보)
- [Best Practice](#best-practice)
- [실행 방법](#실행-방법)
- [디렉토리 구조](#디렉토리-구조)

<br />

## 팀 정보

원티드 프리온보딩 프론트엔드 인턴쉽 과정 1팀입니다.

### Members

<table>
    <tr>
        <td align="center">
            <a href="https://github.com/hyejj19">
                <img src="https://avatars.githubusercontent.com/u/89173923?v=4" width="100px;" alt="박혜정"/>
                <br />
                <sub>
                    <b>박혜정</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=hyejj19" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/minsang98">
                <img src="https://avatars.githubusercontent.com/u/64800318?v=4" width="100px;" alt="김민상"/>
                <br />
                <sub>
                    <b>김민상</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=minsang98" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/kwakhyun">
                <img src="https://avatars.githubusercontent.com/u/73919235?v=4" width="100px;" alt="곽현"/>
                <br />
                <sub>
                    <b>곽현</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=kwakhyun" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/badmaniacs">
                <img src="https://avatars.githubusercontent.com/u/96967183?v=4" width="100px;" alt="박경태"/>
                <br />
                <sub>
                    <b>박경태</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=badmaniacs" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/zkzk8953">
                <img src="https://avatars.githubusercontent.com/u/78520794?s=400&u=355629856caf2969fe39e5cc7f4a07f800e90f5d&v=4" width="100px;" alt="seoungheon lee"/>
                <br />
                <sub>
                    <b>이성헌</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=zkzk8953" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/rewrite0w0">
                <img src="https://avatars.githubusercontent.com/u/55968557?v=4" width="100px;" alt="오태준"/>
                <br />
                <sub>
                    <b>오태준</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=rewrite0w0" title="Code">💻</a>
        </td>
        <td align="center">
            <a href="https://github.com/bigwave-cho">
                <img src="https://avatars.githubusercontent.com/u/105909665?v=4" width="100px;" alt="조재현"/>
                <br />
                <sub>
                    <b>조재현</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=bigwave-cho" title="Code">💻</a>
        </td> 
        <td align="center">
            <a href="https://github.com/JeongTaekCho">
                <img src="https://avatars.githubusercontent.com/u/92679073?v=4" width="100px;" alt="조정택"/>
                <br />
                <sub>
                    <b>조정택</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=JeongTaekCho" title="Code">💻</a>
        </td> 
        <td align="center">
            <a href="https://github.com/aydenote">
                <img src="https://avatars.githubusercontent.com/u/77476077?v=4" width="100px;" alt="최승수"/>
                <br />
                <sub>
                    <b>최승수</b>
                </sub>
            </a>
            <br />
            <a href="https://github.com/preOnboarding8-team1/todo-list/commits?author=aydenote" title="Code">💻</a>
        </td>                 
    </tr>
</table>

### Notion

> https://www.notion.so/8-1-e616fa02748b428ebd94686ac7607fd7

<br />

## Best Practice

과제에서 요구한 기능들의 구현 여부 및 Best Practice로 도출된 코드들에 대해 설명합니다.

### Assignment1

- [x] 이메일과 비밀번호의 유효성 검사기능을 구현해주세요

  - [x] 이메일 조건: `@` 포함
  - [x] 비밀번호 조건: 8자 이상
  - [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요
  - [x] 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

  <br />

  ```jsx
  const validity = (id, txt) => {
    if (id === 'email') {
      const regex =
        /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

      if (txt.match(regex) === null) return '이메일 형식이 올바르지 않습니다';

      return true;
    }

    if (id === 'password') {
      if (txt.length < 8) return '비밀번호는 8자리 이상이여야 합니다';

      return true;
    }

    if (id === 'passwordCheck') {
      if (txt !== userInfo.password.txt) return '비밀번호가 다릅니다';

      return true;
    }
  };
  ```

  <br />

  > 📌 이메일, 패스워드 입력 시 유효성 검사 함수가 동작하며, useState로 유효성 검사 결과를 관리합니다.  
  > 📌 유효성 검사는 정규표현식을 이용하여 입력된 이메일, 패스워드를 판별하고 로그인 또는 회원가입 버튼의 활성화를 결정하게 됩니다.  
  > 📌 로그인, 회원가입에 실패할 경우, 알림 메시지를 다르게 띄워 UX를 고려하며 구현했습니다.

### Assignment2

- [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동해주세요

  - [x] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - [x] 응답받은 JWT는 로컬 스토리지에 저장해주세요

  <br />

  ```jsx
  if (cursor) {
    const data = {
      email: userInfo.email.txt,
      password: userInfo.password.txt,
    };

    if (menu === '로그인') {
      const res = await authAPI.signin(data);

      if (res.status === 200) {
        localStorage.setItem('access_token', `Bearer ${res.data.access_token}`);
        navigate('/todo');
      } else if (res.response.status === 401) handleIsModal();
    } else {
      const res = await authAPI.signup(data);

      if (res.status === 201) {
        localStorage.setItem('access_token', `Bearer ${res.data.access_token}`);
        navigate('/todo');
      } else if (res.response.status === 400) handleIsModal();
    }
  }
  ```

  <br />

  > 📌 유효성 검사 결과에 따라 버튼 활성화 여부가 결정되도록 구현했습니다.  
  > 📌 조건문을 통해 클릭된 메뉴가 로그인이라면 로그인 API 호출을 실행하고 로그인이 아니라면 회원가입 API 호출이 실행됩니다.  
  > 📌 로그인, 회원가입 성공 시 페이지 이동에 `navigate`를 활용하였습니다.  
  > 📌 로그인, 회원가입 시 발생하는 오류에 대해 모달이 출력되어 사용자가 직관적으로 에러를 알 수 있게 설정했습니다.

### Assignment3

- [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

  - [x] 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - [x] 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트 시켜주세요

  <br />

  ```jsx
  // page/Login.jsx
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) navigate('/todo');
  }, []);

  // page/Todo.jsx
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) navigate('/');
  }, []);
  ```

  <br />

  > 📌 각 페이지에서 마운트될 때 토큰 여부를 확인합니다.  
  > 📌 토큰 여부 결과에 따라 `navigate`를 사용하여 리다이렉트를 구현했습니다.

---

### Assignment4

- [x] `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요

  - [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
  - [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

  <br />

    ```jsx
    // pages/Todo.jsx
    const { data: todos, setRefetch } = useFetch('/todos');

    const handleCreateTodo = async (todo) => {
    try {
        await todoAPI.createTodo(todo);
        setRefetch((prev) => prev + 1);
    } catch (err) {
        return err;
    }
    };

    <TodoInput handleCreateTodo={handleCreateTodo} />;
    {
    todos && <TodoList todos={todos} />;
    }
    ```

    > 📌 API 호출은 관심사 분리를 위해 auth 와 todo로 분리하였으며 가독성을 위해 객체와 메서드 형태로 작성하였습니다.  
    > 📌 `TodoInput` 컴포넌트에서는 `handleCreateTodo` 함수를 실행시켜 투두 리스트를 추가합니다.  
    > 📌 `createTodo` 함수는 `axios`를 통해 `POST` 요청을 보내고, `setRefetch`를 통해 `refetch`를 실행시킵니다.  
    > 📌 확장성, 재사용성을 위해서 useFetch 훅을 별도로 생성하여 사용했습니다.  
    > 📌 UI 업데이트를 위해 useFetch 훅에 useEffect 를 사용하여 refetch 상태 업데이트와 동시에 get 요청을 보내도록 작성했습니다.

    ```jsx
    const TodoInput = ({ handleCreateTodo }) => {
    const [todo, setTodo] = useState('');

    const handleChangeInput = (e) => setTodo(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreateTodo(todo);
        setTodo('');
    };
    return (
        <TodoInputComponent onSubmit={handleSubmit}>
        <input placeholder="new Todo.." onChange={handleChangeInput} value={todo} />
        <button type="button">+</button>
        </TodoInputComponent>
    );
    };

    export default TodoInput;
    ```

    <br />

    > 📌 TodoInput 컴포넌트에서는 handleCreateTodo 함수를 props로 받아옵니다.  
    > 📌 handleCreateTodo 함수는 TodoInput 컴포넌트에서 투두 리스트를 추가할 때 실행됩니다.  
    > 📌 TodoInput 컴포넌트에서는 todo라는 state를 가지고 있고, input의 value로 사용됩니다.  
    > 📌 input의 value가 변경되면 handleChangeInput 함수가 실행되고, todo state를 변경합니다.

### Assignment5

- [x] 투두 리스트의 수정, 삭제 기능을 구현해주세요

  - [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
  - [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
  - [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요

  <br />

    ```jsx
    // pages/Todo.js
    const { data: todos, setRefetch } = useFetch('/todos');

    const handleUpdateTodo = async (id, newTodo, isCompleted) => {
    try {
        await todoAPI.updateTodo(id, newTodo, isCompleted);
        setRefetch((prev) => prev + 1);
    } catch (err) {
        return err;
    }
    };

    const handleDeleteTodo = async (id) => {
    try {
        await todoAPI.deleteTodo(id);
        setRefetch((prev) => prev + 1);
    } catch (err) {
        return err;
    }
    };

    {
    todos && <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} />;
    }

    // components/TodoList.js
    const TodoList = ({ todos, handleDeleteTodo, handleUpdateTodo }) => (
    <TodoListComponent>
        {todos.map((todo) => (
        <TodoItem data={todo} key={todo.id} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} />
        ))}
    </TodoListComponent>
    );

    export default memo(TodoList);
    ```

    > 📌 `handleUpdateTodo` 함수는 `TodoList` 컴포넌트에서 투두 리스트를 수정할 때 실행됩니다.  
    > 📌 `TodoList` 컴포넌트에서는 `handleUpdateTodo` 함수와 `handleDeleteTodo` 함수를 props로 받아옵니다.  
    > 📌 `TodoList` 컴포넌트에서는 `todos` 상태를 `TodoItem` 컴포넌트에 props로 전달합니다.

    ```jsx
    // components/TodoItem.js

    const TodoItem = ({ data, handleDeleteTodo, handleUpdateTodo }) => {
    const { todo, isCompleted, id } = data;

    const [isEdit, setIsEdit] = useState(false);

    const [newTodo, setNewTodo] = useState(todo);

    const inputRef = useRef();

    const handleEdit = () => {
        setIsEdit(!isEdit);
        if (isEdit) {
        handleUpdateTodo(id, newTodo, false);
        }
    };

    const updateCancel = () => {
        setIsEdit(false);
        setNewTodo(todo);
    };

    return (
        <TodoComponent>
        <div className={isCompleted ? 'todo done' : 'todo'}>
            <span>
            {isEdit ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} ref={inputRef} /> : todo}
            </span>
            {isEdit ? (
            <div className="action-icons">
                <button type="button" onClick={handleEdit}>
                수정
                </button>
                <button type="button" onClick={updateCancel}>
                취소
                </button>
            </div>
            ) : (
            <div className="action-icons">
                <div
                className="action-icon complete"
                onClick={() => handleUpdateTodo(id, todo, !isCompleted)}
                role="presentation">
                {isCompleted ? <BsCheckSquareFill /> : <BsCheckSquare />}
                </div>
                <div className="action-icon" onClick={handleEdit} role="presentation">
                <BsPencil />
                </div>
                <div className="action-icon delete" onClick={() => handleDeleteTodo(id)} role="presentation">
                <TiDeleteOutline />
                </div>
            </div>
            )}
        </div>
        </TodoComponent>
    );
    };

    export default memo(TodoItem);
    ```

    <br />

    > 📌 TodoItem 컴포넌트에서는 handleDeleteTodo 함수와 handleUpdateTodo 함수를 props로 받아옵니다.  
    > 📌 handleDeleteTodo 함수는 TodoItem 컴포넌트에서 투두 리스트를 삭제할 때 실행됩니다.  
    > 📌 handleUpdateTodo 함수는 TodoItem 컴포넌트에서 투두 리스트를 수정할 때 실행됩니다.  
    > 📌 TodoItem 컴포넌트에서는 투두의 data 상태를 TodoItem 컴포넌트에 props로 전달합니다.  
    > 📌 TodoItem 컴포넌트에서는 isEdit 상태를 통해 투두 리스트를 수정할 때와 수정하지 않을 때를 구분합니다.

<br />

## 실행 방법

해당 프로젝트를 로컬서버에서 실행하기 위해서는 Git 과 Npm (node.js를 포함) 이 설치되어 있어야 합니다.

1. 레파지토리 클론

   ```
   git clone https://github.com/preOnboarding8-team1/todo-list.git
   ```

2. packages 설치

   ```
   npm install
   ```

3. 실행

   ```
   npm start
   ```

<br />

## 디렉토리 구조

<details>
    <summary>Repository Overview</summary>
    <div>

        📂 src
        ┣ 📂 api
        ┃ ┣ 📝auth.js
        ┃ ┗ 📝todo.js
        ┣ 📂 components
        ┃ ┣ 📝Button.jsx
        ┃ ┣ 📝InputBox.jsx
        ┃ ┣ 📝Modal.jsx
        ┃ ┣ 📝Todo.jsx
        ┃ ┣ 📝TodoInput.jsx
        ┃ ┗ 📝TodoList.jsx
        ┣ 📂 hooks
        ┃ ┗ 📝useFetch.js
        ┣ 📂 pages
        ┃ ┣ 📝Login.jsx
        ┃ ┗ 📝Todo.jsx
        ┣ 📂 router
        ┃ ┗ 📝router.js
        ┗ 📂 utils
          ┗ 📝httpClient.js

</details>
