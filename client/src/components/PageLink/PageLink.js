import "./pagelink.scss"
import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';
import {motion} from 'framer-motion'


//These are the framer-motion variants for the link
const linkVariants = {
    initial: {
  
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.1,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1,
      },
    }
  }

function PageLink({ page, pageLink}) {
  return (
    // This is the motion component that adds the variant animations
    <motion.div
      className='motion-container'
      variants={linkVariants}
      initial='initial'
      whileHover='hover'
      whileTap='tap'
    >
      {/* This is the link that gets assigned each page*/}
      <Link 
        className='page-link'
        to={`${pageLink}`}
      >
        {page}
      </Link>
    </motion.div>
  )
}

export default PageLink