import { motion, Variants } from "framer-motion";



const App = () => {
  return (<>
   
    <div>
      <motion.h1
      initial={{opacity:100 ,y:100,x:-200}}
      animate={{ opacity: 1,
        x:200, y: 100,}}
        transition={{
          staggerChildren: 0.3,
          duration: 1.5,
        }}
      >
        <img src="https://tse1.mm.bing.net/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&pid=Api&rs=1&c=1&qlt=95&w=206&h=115"></img>
        <h1>First</h1>
      </motion.h1>
    </div>
    <div>
      <motion.h1
      initial={{opacity:100 ,y:100,x:-450}}
      animate={{ opacity: 1,
        y: 100,x:10}}
        transition={{
          staggerChildren: 0.3,
          duration: 1.5,
        }}
      >
        <img src="https://tse1.mm.bing.net/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&pid=Api&rs=1&c=1&qlt=95&w=206&h=115"></img>
        <h1>Secound</h1>
      </motion.h1>
      </div>
      <div>
      <motion.h1
      initial={{opacity:100 ,y:100,x:-700}}
      animate={{ opacity: 1,
        y: 100,x:-200}}
        transition={{
          staggerChildren: 0.3,
          duration: 1.5,
        }}
      >
        <img src="https://tse1.mm.bing.net/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&pid=Api&rs=1&c=1&qlt=95&w=206&h=115"></img>
        <h1>Third</h1>
      </motion.h1>
    </div>
    <div>
      <motion.h1
       initial={{opacity:100 ,y:100,x:-800}}
       animate={{ opacity: 1,
         y: 100,x:-370}}
        transition={{
          staggerChildren: 0.3,
          duration: 1.5,
        }}
      >
        <img src="https://tse1.mm.bing.net/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&pid=Api&rs=1&c=1&qlt=95&w=206&h=115"></img>
        <h1>Fourth</h1>
      </motion.h1>
    </div>
    </>
    
  );
};

export default App;