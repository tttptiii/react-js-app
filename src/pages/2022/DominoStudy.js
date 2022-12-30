import img11 from '../../assets/images/2022/domino/1-1.jpg';
import img12 from '../../assets/images/2022/domino/1-2.jpg';
import img21 from '../../assets/images/2022/domino/2-1.jpg';
import img22 from '../../assets/images/2022/domino/2-2.jpg';
import img31 from '../../assets/images/2022/domino/3-1.jpg';
import img32 from '../../assets/images/2022/domino/3-2.jpg';
import img41 from '../../assets/images/2022/domino/4-1.jpg';
import img42 from '../../assets/images/2022/domino/4-2.jpg';
import img51 from '../../assets/images/2022/domino/5-1.jpg';
import img52 from '../../assets/images/2022/domino/5-2.jpg';
import img53 from '../../assets/images/2022/domino/5-3.jpg';

import '../../assets/styles/images.css';

function DominoStudy(props) {
  return (
    <div className="App">
      <h2><strong><em>Object Oriented: Domino Study</em></strong></h2>
      <p>
        객체지향의 관점으로 도미노를 설명해보자.
      </p><br />
      <Case1 />
      <Case2 />
      
    </div>
  );
}

function Case1() {
  return(
    <div>
      <h3><strong>Case 1: 일자형 도미노 1</strong></h3>
      <img src={img11} className="image-style-1" alt="1" width="450"/>

      <p>
        <strong>summary:</strong><br />
        <br />
        순서가 있는 도미노. 제일 왼쪽에 있는 도미노를 밀면 이어져있는 도미노들이 순서대로 쓰러진다.<br />
      </p><br />

      <p>
        <strong>objects:</strong><br />
        <br />
        <mark>Domino</mark><br />
        - 속성<br />
        &emsp;<u><em>State</em></u>: 도미노는 서있거나 쓰러져있거나 둘 중 하나의 상태에 놓여있다.<br />
        &emsp;<u><em>Will Push</em></u>: 도미노는 쓰러지면서 밀 다른 <mark>Domino</mark>를 알고 있다.<br />
        - 기능<br />
        &emsp;<u><em>Push()</em></u>:<br />
        &emsp;&emsp;외부에서 해당하는 도미노를 밀었을때 작동한다. 즉, 누군가 어떤 도미노를 민 것을 해당 도미노의 <em>Push()</em>를 발동한 것으로 본다.<br />
        &emsp;&emsp;본인의 <em>State</em>가 <em>쓰러짐</em>이면, 쓰러진 상태에서는 누가 밀어도 아무 일도 발생하지 않으므로, 다른 작동을 더 하지 않고 끝난다.<br />
        &emsp;&emsp;본인의 <em>State</em>가 <em>서있음</em>이면, <em>State</em>를 <em>쓰러짐</em>으로 바꾸고, <em>Will Push</em>에 들어있는 도미노의 <em>Push()</em>를 작동시킨다.<br />
        &emsp;&emsp;이때, <em>State</em>가 <em>쓰러짐</em>으로 바뀌는데 <em>Will Push</em>가 비어있으면, <em>State</em>만 바뀌고 다른 작동을 더 하지 않는다.<br />
      </p><br />

      <p>
        <strong>system:</strong><br />
        <br />
        왼쪽부터 순서대로 도미노_1, 도미노_2, 도미노_3, 도미노_4.<br />
        <br />
        <strong>도미노_1</strong>(<mark>Domino</mark>)<br />
        &emsp;<em>State</em>: 서있음<br />
        &emsp;<em>Will Push</em>: 도미노_2<br />
        <br />
        <strong>도미노_2</strong>(<mark>Domino</mark>)<br />
        &emsp;<em>State</em>: 서있음<br />
        &emsp;<em>Will Push</em>: 도미노_3<br />
        <br />
        <strong>도미노_3</strong>(<mark>Domino</mark>)<br />
        &emsp;<em>State</em>: 서있음<br />
        &emsp;<em>Will Push</em>: 도미노_4<br />
        <br />
        <strong>도미노_4</strong>(<mark>Domino</mark>)<br />
        &emsp;<em>State</em>: 서있음<br />
        &emsp;<em>Will Push</em>: -<br />
      </p><br />

      <p>
        <strong>experiment - 1:</strong><br />
        <br />
        트리거:<br />
        &emsp;- <strong>도미노_1</strong>을 민다.<br />
        <br />
        경과:<br />
        &emsp;- <strong>도미노_1</strong>의 <em>Push()</em> 호출.<br />
        &emsp;- <strong>도미노_1</strong>의 <em>State</em>가 <em>쓰러짐</em>으로 바뀌며, <em>Will Push</em>에 있는 <strong>도미노_2</strong>의 <em>Push()</em> 호출.<br />
        &emsp;- <strong>도미노_2</strong>의 <em>State</em>가 <em>쓰러짐</em>으로 바뀌며, <em>Will Push</em>에 있는 <strong>도미노_3</strong>의 <em>Push()</em> 호출.<br />
        &emsp;- <strong>도미노_3</strong>의 <em>State</em>가 <em>쓰러짐</em>으로 바뀌며, <em>Will Push</em>에 있는 <strong>도미노_4</strong>의 <em>Push()</em> 호출.<br />
        &emsp;- <strong>도미노_4</strong>의 <em>State</em>가 <em>쓰러짐</em>으로 바뀌며, <em>Will Push</em>가 비어있으므로 아무 일도 일어나지 않는다.<br />
        &emsp;- 상황 종료.<br />
        <br />
        결과:<br />
        <img src={img12} className="image-style-1" alt="1" width="450"/>
      </p><br />

      <p>
        <strong>문제점:</strong><br />
        <br />
        - 도미노_3을 도미노_2 방향으로 쓰러뜨리고 싶어도 이 시스템에서는 불가능하다. 도미노_3의 <em>Will Push</em>에 도미노_2를 넣지 못한다.<br />
        - 도미노_3의 <em>Will Push</em>에는 <mark>Domino</mark>의 정의에 의해 다른 <mark>Domino</mark>가 하나만 들어갈 수 있다. 그러므로 <em>Will Push</em>에는 도미노_2와 도미노_4가 같이 들어갈 수 없다.<br />
        - 만약 도미노_3의 <em>Will Push</em>에 도미노_2가 들어가면, 도미노_2가 도미노_3을 넘어뜨리더라도 도미노_4가 아니라 도미노_2를 미는 식으로 동작하게 되며, 이는 의도한 동작이 아니다.<br />
        - 만약 도미노_3의 <em>Will Push</em>에 도미노_2, 도미노_4가 같이 들어갈 수 있더라도, 물리적으로 봤을때 도미노_3이 쓰러지면서 두 도미노를 동시에 미는 것은 의도한 동작이 아니다.<br />
      </p><br />
    </div>
  );
}

function Case2() {
  return(
    <div>
      <h3><strong>Case 2: 일자형 도미노 2</strong></h3>
      <img src={img21} className="image-style-1" alt="1" width="450"/>

      <p>
        <strong>summary:</strong><br />
        <br />
        순서가 있는 도미노.<br />
        - 제일 왼쪽에 있는 도미노를 오른쪽으로 밀면 이어져있는 도미노들이 순서대로 쓰러진다.<br />
        - 오른쪽에서 두 번째 도미노를 왼쪽으로 밀면 제일 오른쪽의 도미노를 제외한 나머지 이어져있는 도미노들이 순서대로 쓰러진다.<br />
      </p><br />

      <p>
        <strong>objects:</strong><br />
        <br />
        <mark>Domino</mark><br />
        - 속성<br />
        &emsp;<u><em>State</em></u>: 도미노는 서있거나 쓰러져있거나 둘 중 하나의 상태에 놓여있다.<br />
        &emsp;<u><em>Will Push Front</em></u>: 도미노가 뒤에서 밀려서 앞으로 쓰러지면 앞에 있는 다른 <mark>Domino</mark>를 민다.<br />
        &emsp;<u><em>Will Push Back</em></u>: 도미노가 앞에서 밀려서 뒤로 쓰러지면 뒤에 있는 다른 <mark>Domino</mark>를 민다.<br />
        - 기능<br />
        &emsp;<u><em>Push Back()</em></u>:<br />
        &emsp;&emsp;외부에서 해당하는 도미노의 뒷면을 밀었을때 작동한다. 즉, 누군가 어떤 도미노의 뒷면을 민 것을 해당 도미노의 <em>Push Back()</em>을 발동한 것으로 본다.<br />
        &emsp;&emsp;본인의 <em>State</em>가 <em>쓰러짐</em>이면, 쓰러진 상태에서는 누가 밀어도 아무 일도 발생하지 않으므로, 다른 작동을 더 하지 않고 끝난다.<br />
        &emsp;&emsp;본인의 <em>State</em>가 <em>서있음</em>이면, <em>State</em>를 <em>쓰러짐</em>으로 바꾸고, <em>Will Push Front</em>에 들어있는 도미노의 <em>Push Back()</em>을 작동시킨다.<br />
        &emsp;&emsp;이때, <em>State</em>가 <em>쓰러짐</em>으로 바뀌는데 <em>Will Push Front</em>가 비어있으면, <em>State</em>만 바뀌고 다른 작동을 더 하지 않는다.<br />
        &emsp;<u><em>Push Front()</em></u>:<br />
        &emsp;&emsp;외부에서 해당하는 도미노의 앞면을 밀었을때 작동한다. 즉, 누군가 어떤 도미노의 앞면을 민 것을 해당 도미노의 <em>Push Front()</em>를 발동한 것으로 본다.<br />
        &emsp;&emsp;본인의 <em>State</em>가 <em>쓰러짐</em>이면, 쓰러진 상태에서는 누가 밀어도 아무 일도 발생하지 않으므로, 다른 작동을 더 하지 않고 끝난다.<br />
        &emsp;&emsp;본인의 <em>State</em>가 <em>서있음</em>이면, <em>State</em>를 <em>쓰러짐</em>으로 바꾸고, <em>Will Push Back</em>에 들어있는 도미노의 <em>Push Front()</em>를 작동시킨다.<br />
        &emsp;&emsp;이때, <em>State</em>가 <em>쓰러짐</em>으로 바뀌는데 <em>Will Push Front</em>가 비어있으면, <em>State</em>만 바뀌고 다른 작동을 더 하지 않는다.<br />
      </p><br />

      <p>
        <strong>system:</strong><br />
        <br />
        왼쪽부터 순서대로 도미노_1, 도미노_2, 도미노_3, 도미노_4.<br />
        <br />
        <strong>도미노_1</strong>(<mark>Domino</mark>)<br />
        &emsp;<em>State</em>: 서있음<br />
        &emsp;<em>Will Push Front</em>: -<br />
        &emsp;<em>Will Push Back</em>: 도미노_2<br />
        <br />
        <strong>도미노_2</strong>(<mark>Domino</mark>)<br />
        &emsp;<em>State</em>: 서있음<br />
        &emsp;<em>Will Push Front</em>: 도미노_1<br />
        &emsp;<em>Will Push Back</em>: 도미노_3<br />
        <br />
        <strong>도미노_3</strong>(<mark>Domino</mark>)<br />
        &emsp;<em>State</em>: 서있음<br />
        &emsp;<em>Will Push Front</em>: 도미노_2<br />
        &emsp;<em>Will Push Back</em>: 도미노_4<br />
        <br />
        <strong>도미노_4</strong>(<mark>Domino</mark>)<br />
        &emsp;<em>State</em>: 서있음<br />
        &emsp;<em>Will Push Front</em>: 도미노_3<br />
        &emsp;<em>Will Push Back</em>: -<br />
      </p><br />

      <p>
        <strong>experiment - 1:</strong><br />
        <br />
        트리거:<br />
        &emsp;- <strong>도미노_1</strong>을 앞에서 민다.<br />
        <br />
        경과:<br />
        &emsp;- <strong>도미노_1</strong>의 <em>Push Front()</em> 호출.<br />
        &emsp;- <strong>도미노_1</strong>의 <em>State</em>가 <em>쓰러짐</em>으로 바뀌며, <em>Will Push Back</em>에 있는 <strong>도미노_2</strong>의 <em>Push Front()</em> 호출.<br />
        &emsp;- <strong>도미노_2</strong>의 <em>State</em>가 <em>쓰러짐</em>으로 바뀌며, <em>Will Push Back</em>에 있는 <strong>도미노_3</strong>의 <em>Push Front()</em> 호출.<br />
        &emsp;- <strong>도미노_3</strong>의 <em>State</em>가 <em>쓰러짐</em>으로 바뀌며, <em>Will Push Back</em>에 있는 <strong>도미노_4</strong>의 <em>Push Front()</em> 호출.<br />
        &emsp;- <strong>도미노_4</strong>의 <em>State</em>가 <em>쓰러짐</em>으로 바뀌며, <em>Will Push Back</em>이 비어있으므로 아무 일도 일어나지 않는다.<br />
        &emsp;- 상황 종료.<br />
        <br />
        결과:<br />
        <img src={img12} className="image-style-1" alt="1" width="450"/>
      </p><br />

      <p>
        <strong>experiment - 2:</strong><br />
        <br />
        트리거:<br />
        &emsp;- <strong>도미노_3</strong>을 뒤에서 민다.<br />
        <br />
        경과:<br />
        &emsp;- <strong>도미노_3</strong>의 <em>Push Back()</em> 호출.<br />
        &emsp;- <strong>도미노_3</strong>의 <em>State</em>가 <em>쓰러짐</em>으로 바뀌며, <em>Will Push Front</em>에 있는 <strong>도미노_2</strong>의 <em>Push Back()</em> 호출.<br />
        &emsp;- <strong>도미노_2</strong>의 <em>State</em>가 <em>쓰러짐</em>으로 바뀌며, <em>Will Push Front</em>에 있는 <strong>도미노_1</strong>의 <em>Push Back()</em> 호출.<br />
        &emsp;- <strong>도미노_1</strong>의 <em>State</em>가 <em>쓰러짐</em>으로 바뀌며, <em>Will Push Front</em>가 비어있으므로 아무 일도 일어나지 않는다.<br />
        &emsp;- 상황 종료.<br />
        <br />
        결과:<br />
        <img src={img22} className="image-style-1" alt="1" width="450"/>
      </p><br />

      <p>
        <strong>문제점:</strong><br />
        <br />
        - <mark>Domino</mark>의 앞과 뒤는 어떻게 정의되는가? 판 위에 도미노가 놓여있을때 어느 면의 도미노의 앞이라고 말할 수 있을까?<br />
        - 동시에 두 도미노를 쓰러뜨리는 것이 불가능하다.
      </p><br />
    </div>
  );
}

export default DominoStudy;