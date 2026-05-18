import React, { useEffect, useState } from 'react'
import { Circle, Cross } from './componnts/Shape'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

function App() {
    const [element, setElement] = useState(Array(9).fill(null))
    const [currentState, setCurrentState] = useState(true)
    const { width, height } = useWindowSize()

    function checkWinner() {
        if (
            (element[0] !== null && element[0] === element[1] && element[0] === element[2]) ||
            (element[3] !== null && element[3] === element[4] && element[3] === element[5]) ||
            (element[6] !== null && element[6] === element[7] && element[6] === element[8]) ||
            (element[0] !== null && element[0] === element[3] && element[0] === element[6]) ||
            (element[1] !== null && element[1] === element[4] && element[1] === element[7]) ||
            (element[2] !== null && element[2] === element[5] && element[2] === element[8]) ||
            (element[0] !== null && element[0] === element[4] && element[0] === element[8]) ||
            (element[2] !== null && element[2] === element[4] && element[2] === element[6])
        ) {
            return true;
        }
        return false;
    }
    const isWon = checkWinner();
    function click(arrIndex) {
        if (isWon || element[arrIndex] !== null) {
            return;
        }
        setElement(element.map(
            (ele, index) => (index === arrIndex ? currentState : ele)
        ))
        setCurrentState(!currentState)
    }
    function reset() {
        setElement(Array(9).fill(null))
        setCurrentState(true)
    }

    const draw = element.every((isNull) => isNull !== null)

    return (
        <div className='min-h-dvh w-dvw bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center overflow-hidden relative'>
            {/* Background Animation Elements */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob'></div>
                <div className='absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000'></div>
                <div className='absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-4000'></div>
            </div>

            {isWon ? <Confetti
                width={width}
                height={height}
            /> : null}

            {/* Status Section */}
            <div className='relative z-10 mb-16'>
                {isWon
                    ? <div className='flex flex-col items-center gap-4'>
                        <span className='text-xs font-semibold tracking-widest text-emerald-400 uppercase'>🎉 Victory</span>
                        <div className='flex items-center gap-6 px-8 py-6 bg-linear-to-r from-emerald-900/40 to-emerald-800/40 backdrop-blur-xl border border-emerald-600/50 rounded-2xl shadow-2xl shadow-emerald-500/20'>
                            {currentState ? <Circle /> : <Cross />}
                            <span className='font-mono text-lg font-light text-white'>WINS!</span>
                        </div>
                    </div>
                    : draw
                        ? <div className='flex flex-col items-center gap-4'>
                            <span className='text-xs font-semibold tracking-widest text-yellow-400 uppercase'>🤝 Draw</span>
                            <div className='flex items-center gap-6 px-8 py-6 bg-linear-to-r from-yellow-900/40 to-yellow-800/40 backdrop-blur-xl border border-yellow-600/50 rounded-2xl shadow-2xl shadow-yellow-500/20'>
                                <span className='font-mono text-lg font-light text-white'>DRAW</span>
                            </div>
                        </div>
                        : <div className='flex flex-col items-center gap-4'>
                            <span className='text-xs font-semibold tracking-widest text-slate-400 uppercase'>Current Turn</span>
                            <div className='flex items-center gap-6 px-8 py-6 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300'>
                                <span className='font-mono text-lg font-light text-slate-300'>PLAYER</span>
                                {currentState ? <Cross /> : <Circle />}
                            </div>
                        </div>
                }
            </div>

            {/* Game Grid */}
            <div className='relative z-10 grid grid-cols-3 gap-4 p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl'>
                {
                    element.map((box, _index) =>
                        <button
                            key={_index}
                            className='group relative w-24 h-24 bg-linear-to-br from-slate-700/40 to-slate-800/60 hover:from-slate-600/60 hover:to-slate-700/80 border border-slate-600/40 hover:border-blue-500/50 rounded-xl transition-all duration-300 flex items-center justify-center active:scale-95'
                            onClick={() => click(_index)}
                        >
                            <div className='absolute inset-0 bg-linear-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300'></div>
                            <div className='relative z-10'>
                                {
                                    element[_index] !== null
                                        ? (element[_index] ? <Cross /> : <Circle />)
                                        : null
                                }
                            </div>
                        </button>)
                }
            </div>

            {/* Restart Button */}
            <div className='relative z-10 mt-16'>
                {
                    isWon || draw
                        ? <button className='px-10 py-3 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 active:scale-95'
                            onClick={reset}
                        >
                            Play Again
                        </button>
                        : null
                }
            </div>
        </div>
    )
}

export default App