import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'

const TenContainer = () => {
  const { messages } = useSelector(s => s.ten);
  const SingleTen = useMemo(() => ({ t }) => {
    let now = new Date().getTime();
    let deftime = (t.createAt) - (now - 6000);
    const [isVisible, setVisibi] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setVisibi(false)
      }, deftime)
    }, [])
    return (
      <>
        <AnimatePresence>
          {
            isVisible &&
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              exit={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="wmia mt20 r-s-c br10 drop-shadow-2xl bg-l p10">
              <h1 className='fw900  fs16'>
                {t.message}
              </h1>
            </motion.div>
          }
        </AnimatePresence>
      </>
    )
  }, [])
  return (
    <div
      className='c-s-c pt20'
      style={{
        position: "fixed",
        zIndex: '20',
        top: "0",
        right: "10px"
      }}
    >
      {
        messages.map(s => {
          return <SingleTen t={s} key={s.createAt} />
        })
      }
    </div>
  )
}

export default TenContainer
