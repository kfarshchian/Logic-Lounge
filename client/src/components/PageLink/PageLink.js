import "./pagelink.scss"
import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';
import {motion} from 'framer-motion'

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
    <motion.div
      className='motion-container'
      variants={linkVariants}
      initial='initial'
      whileHover='hover'
      whileTap='tap'
    >
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