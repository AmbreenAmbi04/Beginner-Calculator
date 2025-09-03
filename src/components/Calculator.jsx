import { useState } from 'react';
import { motion } from 'framer-motion';

const Calculator = () => {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);

return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.h1 className= "text-center mt-5 text-danger fw-bold">Beginner Calculator!</motion.h1>
        <motion.p className= "text-center fw-semibold fs-3 text-muted">Let's do some math!</motion.p>
        <motion.div className= "text-center fs-4 text-muted mb-3">
            <motion.h2>Enter two numbers to add them together:</motion.h2>
            <motion.h4 className= "mb-4 mt-4">Enter the first number:</motion.h4>
            <motion.input
                type= "number"
                value={number1}
                onChange={(e) => setNumber1(e.target.value)} 
                className= "fw-semibold fs-3 text-muted rounded"/>
                <motion.h4 className= "mb-4 mt-4">Enter the second number:</motion.h4>
            <motion.input 
                type= "number"
                value={number2}
                onChange= {(e) => setNumber2(e.target.value)} 
                className= "fw-semibold fs-3 text-muted rounded"/>
            </motion.div>
        <motion.div className= "text-center align-items-center">
            <motion.button 
                onClick= {() => setResult(parseFloat(number1) + parseFloat(number2))}
                disabled= {!number1 || ! number2}
                className= "btn btn-success mt-3 mb-3 text-center fw-bold fs-4"
                >
                Add
            </motion.button>
            <motion.div>
                {result !== null && <motion.p className="fs-2 fw-semibold text-success">Result: {result}</motion.p>}
            </motion.div>
        </motion.div>

      </motion.div>
);
};

export default Calculator;