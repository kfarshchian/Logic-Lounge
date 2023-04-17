import { motion } from "framer-motion";
import "./backdrop.scss"


export const Backdrop = ({children, onClick}) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.1,
        }
      }}
      exit={{ 
        opacity: 0,
        transition: {
          duration: 0.1,
          delay: 0.1,
        }
      }}
    >
      {children}
    </motion.div>
  )
}