import '../css/index.css'
import '../css/tab.css'
import '../css/Calculator.css'
import '../css/Subscription.css'
import '../css/Income.css'
import '../css/Notice.css'
import '../css/Supply.css'
import '../css/FinIncome.css'
import '../css/Faq.css'
import Head from 'next/head'
import { useContext, useReducer } from 'react'
import Store from '../Store/context'
import reducer from '../Store/reducer'

const App = ({ Component }) => {
    const globalStore = useContext(Store)
    const [state, dispatch] = useReducer(reducer, globalStore)

    return (
        <>
            <Head>
                <title>신희타가점도우미</title>
            </Head>
            <Store.Provider value={{ state, dispatch }}>
                <Component />
            </Store.Provider>
        </>
    )
}

export default App