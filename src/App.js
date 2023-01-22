import './App.css';
import ButtonComponent from './component/ButtonComponent';
import PostList from './component/PostList';
import SelectedPost from './component/SelectedPost';

function App() {
  return (
    <div className="App">
      <h2>React Redux</h2>
      <ButtonComponent />
      <PostList />
      <SelectedPost />
    </div>
  );
}

export default App;
