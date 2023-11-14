import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos provident ullam cumque facere itaque veniam dolorum, et labore quis natus, vitae, quidem sunt repellat architecto eaque harum nisi. Iure laborum sed ab, officia fuga facere ipsa sit, quaerat vel id aspernatur deserunt, odio rem illum nostrum cumque recusandae? Voluptatibus, repellat? Earum officia voluptatem voluptatibus, expedita minima tenetur possimus error perspiciatis laborum itaque sed dolorum blanditiis facilis nemo dolores quod suscipit culpa molestiae tempore ipsum facere eos! Quos sed nihil vero aspernatur, eum deserunt impedit illo natus consequatur quo molestias ab, sunt hic! Officiis earum nulla dolor, repellendus et corrupti eum, maxime quaerat temporibus animi est corporis molestias ipsam pariatur fuga, eos ad labore quidem saepe enim ratione voluptatum officia! Iste adipisci cumque officia, quos alias eius et ad repudiandae, porro placeat distinctio fuga explicabo ducimus, at dolore aspernatur saepe temporibus! Repudiandae consectetur ipsa repellat aut voluptate voluptatum nulla eum a commodi cupiditate. Cumque maiores possimus sit? Mollitia minima, nesciunt totam, quidem non impedit quae laudantium consectetur autem assumenda officia sint laborum tempore. Hic quis voluptatem rerum doloremque molestias quos, veniam suscipit est nulla ab, tempore quidem possimus repellendus dolores atque id! Eligendi ex dignissimos consequuntur facilis. Aspernatur accusantium architecto expedita.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
