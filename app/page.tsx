"use client";
import Image from 'next/image'
import styles from './page.module.css'
import {useCountdown} from "@/hooks/useCountdown";
import {Crimson_Text, Montserrat, Fira_Code} from 'next/font/google'
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import {useEffect, useState} from "react";

const firCode = Fira_Code({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
})


export default function Home() {
    const {days, minutes, seconds, hours} = useCountdown('2024-03-03T13:00:00')
    const {width, height} = useWindowSize();
    const [pageHeight, setPageHeight] = useState(height);

    useEffect(() => {
        var body = document.body,
            html = document.documentElement;

        var height2 = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        setPageHeight(height2);
    }, []);

    return (
        <>

            <Confetti
                width={width}
                height={pageHeight}
                style={{position: "fixed"}}
            />
            <main className={styles.main}>


                <img className={styles.img} alt={''} src='/card.jpeg'

                />
                <div style={{width: '96%'}}  >
                    <h1 className={firCode.className} style={{fontWeight: 700, fontSize: '36px'}}>Time Left</h1>

                    <div
                        className={styles.text}
                         style={{display: 'flex', gap: '20px', marginTop: '0.4rem'}}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <h2 className={firCode.className}>{days}</h2>
                            <p className={firCode.className}>Days</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <h2 className={firCode.className}>{hours}</h2>
                            <p className={firCode.className}>Hours</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <h2 className={firCode.className}>{minutes}</h2>
                            <p className={firCode.className}>Minutes</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <h2 className={firCode.className}>{seconds}</h2>
                            <p className={firCode.className}>Seconds</p>
                        </div>

                    </div>
                    <a href={'https://maps.app.goo.gl/qxhqRqmcsHw1EGJR6'} target={'_blank'}>
                        <button style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'solid 1px white',
                            borderRadius: '25px',
                            marginTop: '2rem',
                            cursor: 'pointer',
                            fontSize: '1.6rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '2rem'

                        }} className={firCode.className}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                <path
                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                            </svg>
                            Go to location
                        </button>
                    </a>
                </div>
            </main>
        </>

    )
}
