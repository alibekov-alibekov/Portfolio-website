import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Nav';
import Footer from './components/footer';
const Home = lazy(()=> import('./pages/Home'));
const Portfolio1 = lazy(()=> import('./pages/portfolio'));
const About = lazy(()=> import('./pages/about'));
const Services = lazy(()=> import('./pages/services'));
const BLog = lazy(()=> import('./pages/blog'));
const Contact = lazy(()=> import('./pages/contact'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<><h1 className='text-center'>404 NOT FOUND</h1></>}>
        <BrowserRouter>
        <header className='header'>
                <NavigationBar />
                </header>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/portfolio' component={ Portfolio1 } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/services' component={ Services } />
            <Route exact path='/blog' component={ BLog } />
            <Route exact path='/contact' component={ Contact } />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
