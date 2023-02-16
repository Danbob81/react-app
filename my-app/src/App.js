import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" /> */}
      {/* <StatefulGreetingWithPrevState greeting="I'm a stateful class component!" name="Mike" /> */}
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
      {/* <EventBinding /> */}
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} />
    </div>
  );
}

export default App;