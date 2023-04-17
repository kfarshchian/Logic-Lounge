import { motion } from "framer-motion";
import { Backdrop } from "../Backdrop";
import './appnav.scss'
import AppNavItem from "../AppNavItem";
import Auth from "../../utils/auth";


function AppNav({handleClose, pages, pageLinks, children}) {
  const slideIn = {
    hidden: {
      width: 0,
      opacity: 0
    },
    visible: {
      width: '200px',
      opacity: 0.9,
      transition: {
        delay: 0.2,
        duration: 0.1,
        type: "spring",
        damping: 50,
        stiffness: 1000,
      }
    },
    exit: {
      width: 0,
      opactiy: 0,
      transition:{
        duration: 0.1
      }
    }
  }
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e)=>e.stopPropagation()}
        className='nav-modal'
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AppNavItem handleClose={handleClose} page={'Home'} pageLink={'/'}/>
        {Auth.loggedIn() && (
          <>
            {pages.map((page,index) => (
              <AppNavItem key={index} handleClose={handleClose} page={page} pageLink={pageLinks[index]}/>
            ))}
            <AppNavItem handleClose={handleClose} page={'Profile'} pageLink={`/users/${Auth.getProfile().data._id}`}/>
          </>
        )}
      </motion.div>
    </Backdrop>
  )
}

export default AppNav