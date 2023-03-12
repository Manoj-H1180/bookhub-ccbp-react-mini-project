import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Bookshelves from './components/Bookshelves'
import BookshelvesContext from './context/BookshelvesContext'
import BookDetails from './components/BookDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import ContactUs from './components/ContactUs'

// use the below bookshelvesList for rendering read status of book items in Bookshelves Route

class App extends Component {
  state = {themeMode: false}

  onClickTheme = () => {
    const {themeMode} = this.state
    this.setState({themeMode: !themeMode})
  }

  render() {
    const {themeMode} = this.state
    return (
      <BookshelvesContext.Provider
        value={{themeMode, onClickTheme: this.onClickTheme}}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/shelf" component={Bookshelves} />
          <ProtectedRoute exact path="/books/:id" component={BookDetails} />
          <ProtectedRoute exact path="/contact" component={ContactUs} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BookshelvesContext.Provider>
    )
  }
}

export default App
