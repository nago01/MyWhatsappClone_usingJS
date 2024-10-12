import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div class ="appContainer">
    <div class="sideBarContainer" id="sideBarId">
     side bar
    </div>
    <div id="contentId">
     selected content
    </div>
  </div>
`;

function handleSelect(arr) {
  console.log(arr, 'arr');
  const chatSelection = document.createElement('div');
  chatSelection.innerHTML = `
  <div class="profileSelectedCnt">${arr.length}</div>
  `;
  let ele = document.getElementById('contentId');
  ele.appendChild(chatSelection);
}

function addProfile() {
  let profile = [
    {
      name: 'Raghav',
      lastSeen: '2 Hours',
      profilePic: 'https://via.placeholder.com/50',
      chats: [
        { sender: 'me', message: 'Hey Raghav, how are you?', time: '10:00 AM' },
        {
          sender: 'Raghav',
          message: 'I’m good, thanks! What about you?',
          time: '10:05 AM',
        },
        {
          sender: 'me',
          message: 'I’m doing great, just finished a project.',
          time: '10:10 AM',
        },
        {
          sender: 'Raghav',
          message: 'Nice! Let’s catch up sometime soon.',
          time: '10:15 AM',
        },
      ],
    },
    {
      name: 'Keshav',
      lastSeen: '1 Hour',
      profilePic: 'https://via.placeholder.com/50',
      chats: [
        {
          sender: 'me',
          message: 'Hey Keshav, long time no see!',
          time: '9:00 AM',
        },
        {
          sender: 'Keshav',
          message: 'Yeah, it’s been a while. How’s everything?',
          time: '9:05 AM',
        },
        {
          sender: 'me',
          message: 'All good, just busy with work.',
          time: '9:10 AM',
        },
        {
          sender: 'Keshav',
          message: 'Let’s meet up this weekend!',
          time: '9:15 AM',
        },
      ],
    },
    {
      name: 'Rani',
      lastSeen: 'Just Now',
      profilePic: 'https://via.placeholder.com/50',
      chats: [
        { sender: 'me', message: 'Hi Rani, what’s up?', time: '10:30 AM' },
        {
          sender: 'Rani',
          message: 'Hey! Just finished my workout.',
          time: '10:31 AM',
        },
        {
          sender: 'me',
          message: 'That’s great! Keeping fit as always.',
          time: '10:32 AM',
        },
        {
          sender: 'Rani',
          message: 'Haha, you know it! How about you?',
          time: '10:33 AM',
        },
      ],
    },
  ];
  for (let i = 0; i < profile.length; i++) {
    const eachCell = document.createElement('div');
    eachCell.innerHTML = `<div class="eachCellCss">
    <div class="eachCellCssLeft">
    <img src="profile.svg" alt="profilePic" class="profileCss"/>
    <div>
    ${profile[i].name}</div>
    </div >
    <div class="eachCellCssRight">${profile[i].lastSeen}</div>
    </div>`;
    eachCell.classList = 'eachCellCnt';
    eachCell.id = 'profile' + i;
    eachCell.onclick = function () {
      // document.getElementById('contentId').innerHTML = profile[i].name;
      handleSelect(profile[i].chats);
    };
    document.getElementById('sideBarId').appendChild(eachCell);
  }
}

addProfile();
