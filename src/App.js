import Contact from './components/Contact'

export default function App() {
  return (
    <div className="container">
      <Contact
        img="http://placekitten.com/400/300"
        name="Destroyer"
        phone= " (212) 555-3456"
        email="destroyer@gmail.com"
      />
      <Contact
        img="http://placekitten.com/300/200"
        name="Mr. Whiskerson"
        phone=" (212) 555-00000"
        email="whiskerson@gmail.com"
      />
      <Contact
        img="http://placekitten.com/400/200"
        name="breaker"
        phone=" (212) 555-11111"
        email="component@gmail.com"
      />
      <Contact
        img="http://placekitten.com/200/100"
        name="maker"
        phone=" (212) 555-77889"
        email="maker@gmail.com"
      />
    </div>
  )
}
