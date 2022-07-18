import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, autem deleniti. Mollitia modi sunt repellat ut ipsum, deleniti, neque corporis fugiat porro assumenda facilis optio commodi dolorum? Aperiam nisi temporibus possimus assumenda architecto amet consequatur perspiciatis dolorum quaerat nulla facilis deleniti, eos nemo ad vero tempore autem vel earum non, veritatis itaque quisquam at iste. Amet eum possimus quibusdam hic laboriosam nesciunt adipisci debitis voluptatum illum nobis dolores, iusto incidunt autem aspernatur suscipit. Architecto, eius? Expedita, illo molestiae. Porro earum modi a ipsam incidunt perferendis debitis explicabo ex laudantium consectetur obcaecati aspernatur quaerat odit commodi, delectus repudiandae dignissimos dicta itaque ab maxime optio. Porro rem magnam excepturi alias magni perspiciatis iure repellat, earum pariatur adipisci tempora sed voluptatibus, explicabo ipsum dolores et culpa ipsa, itaque iste. Praesentium ad sequi non, animi culpa iure est illum ipsum velit officiis obcaecati, quasi perferendis mollitia! Cum illo modi veritatis expedita perspiciatis perferendis neque quis labore distinctio reiciendis eius, quasi omnis. Laborum mollitia quo est deleniti recusandae amet cupiditate cumque, officiis maxime aspernatur pariatur dolore nihil nemo quia magnam ab esse soluta quaerat. Esse architecto iste illum cum officiis corrupti enim reprehenderit sint accusamus perferendis quos, nam suscipit, alias quae id qui molestias, ullam illo? Culpa, officia fugiat sapiente tempore debitis, ad distinctio qui rem magni omnis, adipisci labore natus et tempora quisquam totam. Totam est temporibus dicta impedit numquam officia blanditiis maxime, culpa harum illo repellendus reiciendis? Laborum, nulla? In iste autem ipsum quam dicta adipisci sunt aperiam, nihil non aut commodi impedit, eos natus vitae cupiditate vero quo accusantium quis voluptas minus consequuntur aliquam! Alias ratione ad blanditiis, nulla repellat facere velit neque repudiandae veniam sequi vitae doloremque quod quos sapiente labore nam? Vel obcaecati ullam commodi illo delectus magni nesciunt reprehenderit consequatur natus unde sapiente, temporibus cum sunt esse itaque iste.'
const text2 = 'loremsdfghjkl.,mnbvdrcfgvbhunpijnjpnkj;n'
const text3 = 'Lorem ipsum dolor sit amet loremsdfghjkl.,mnbvdrcfgvbhunpijnjpnkj;n'
const text4 = 'amet consectetur adipisicing elit. Deserunt, autem deleniti. loremsdfghjkl.,mnbvdrcfgvbhunpijnjpnkj;n'

const messageData = [
  { text: text1, id: 1 },
  { text: text2, id: 2 },
  { text: text3, id: 3 },
  { text: text4, id: 4 },
]
const text11 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dolor.'
const text21 = 'Lorem ipsum dolor sit amet.'
const text31 = 'Consectetur adipisicing elit. Similique, dolor.'
const text41 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatibus ullam architecto enim exercitationem at sapiente cum quod! Suscipit eos, dolores natus perspiciatis nostrum similique consectetur reprehenderit inventore nesciunt laboriosam.'

const postsData = [
  { message: text11, id: 1 },
  { message: text21, id: 2 },
  { message: text31, id: 3 },
  { message: text41, id: 4 },
  { message: text11, id: 1 },
  { message: text21, id: 2 },
  { message: text31, id: 3 },
]

const dialogsData = [
  { name: "Kirill", active: true, id: 1 },
  { name: "Maxim", active: false, id: 2 },
  { name: "Anya", active: false, id: 3 },
  { name: "Michail", active: false, id: 4 },
  { name: "Olga", active: false, id: 5 },
  { name: "Stes", active: false, id: 6 },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App message={messageData} post={postsData} dialog={dialogsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
