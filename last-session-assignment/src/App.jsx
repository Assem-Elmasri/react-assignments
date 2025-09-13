import Counter from './components/counter.jsx'
import Iter from './components/Iter.jsx'
import Card from './components/Card.jsx'
import './App.css'

function App() {


  return (
    <>
      <Counter/>
      <Iter/>
      <Card title = 'card 1' color = 'red' para = 'paragraph 1'  />
      <Card title = 'card 2' color = 'green' para = 'paragraph 2'  />
      <Card title = 'card 3' color = 'yellow' para = 'paragraph 3'  />
      <Card title = 'card 4' color = 'blue' para = 'paragraph 4'  />

    </>
  )
}

export default App
