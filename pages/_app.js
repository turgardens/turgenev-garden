import '../styles/globals.css';
import '../styles/swiper/garden.css';
import '../styles/swiper.css';

import { motion } from 'framer-motion';
import { useRouter } from "next/router";
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <motion.div
        key={router.route}

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        exit={{ opacity: 0 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout >
  )

}
