import Counter from "./Counter";
import DogCard from "./DogCard";
function App() {
  return (
    <div>
      Hello! <br />
      <Counter/>
        <DogCard name="Max" image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg"/>
        <DogCard name="Bruno" image="https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
    </div>
  );
}

export default App;
