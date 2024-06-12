import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {

    const loggedIn = await getLoggedInUser()
    // const loggedIn = { firstName: 'Umar', lastName: 'Faruq', email: 'faruq@gmail.com' }

    
    // const loggedIn = await getLoggedInUser()
    console.log('In Root', await getLoggedInUser())
    // console.log('In Root---------------',process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    // console.log(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    // console.log(process.env.NEXT_APPWRITE_KEY)


  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type='greeting'
                    title='Welcome'
                    user={loggedIn?.name || 'Guest'}
                    subtext='Access and manage your account and transactions efficiently.'
                />

                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1257.89}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{}, {}]}
        />
 
    </section>
  )
}

export default Home