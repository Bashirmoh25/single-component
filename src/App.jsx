import style from './App.module.css';
import Subscription from './compnents/subscription/Subscription'
import WhyUs from './compnents/whyUs/WhyUs'
import { useMediaPredicate } from 'react-media-hook';


function App() {
  const lessThan375= useMediaPredicate("(max-width:375px)");
  return (
    <>
    <div className={style.general}>
      <h2 >Join our community</h2>
      <h3 className={style.join}>30-days,hassle free mony back guaratee</h3>
      <p className={style.paraText}>
        Gain access to our library full of tutorils along with experts  code review.
      </p>
      <p className={style.paraText}>
        Prefect  for any developers who are  serious about honing  their skills.
      </p>
      </div>
    <section  className={
      lessThan375?style.sm:style.large
    }>
    <Subscription></Subscription>
     <WhyUs></WhyUs>
    </section>
    
    </>
  )
}

export default App
