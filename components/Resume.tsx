'use client'
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import PrevNextBtns from './PrevNextBtns'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

function Resume() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)

  const goToNextPage = () => {
    if (typeof numPages === 'number') {
      setPageNumber(
        pageNumber + 1 >= numPages ? (numPages as number) : pageNumber + 1
      )
    }
  }

  const downloadResume = () => {
    fetch('/Benga-Olasebikan-CV.pdf').then((res) => {
      res.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob)
        let aTag = document.createElement('a')
        aTag.href = fileUrl
        aTag.download = 'Benga-Olasebikan-CV.pdf'
        aTag.click()
      })
    })
  }

  return (
    <div className=' flex justify-center items-center flex-col p-6 gap-4 h-full w-full'>
      <button
        type='button'
        className='px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900  hover:dark:bg-gray-700 hover:dark:text-white'
        onClick={downloadResume}
      >
        Download Resume
      </button>
      <Document
        file='/Benga-Olasebikan-CV.pdf'
        onLoadSuccess={onDocumentLoadSuccess}
        className='p-2'
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <PrevNextBtns prev={goToPrevPage} next={goToNextPage} />
    </div>
  )
}

export default Resume
