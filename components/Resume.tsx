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
    <div className='flex justify-center items-center flex-col p-6 gap-4 h-full lg:flex lg:flex-col lg:justify-center lg:items-center'>
      <button
        type='button'
        className='px-4 py-2 m-2 text-lg border rounded dark:bg-neutral-400 dark:text-stone-300 hover:bg-transparent'
        onClick={downloadResume}
      >
        Download Resume
      </button>
      <div id='ResumeContainer'>
        <Document
          file='/Benga-Olasebikan-CV.pdf'
          onLoadSuccess={onDocumentLoadSuccess}
          className='PDFDocument'
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderInteractiveForms={false}
            className='PDFPage PDFPageOne'
          />
        </Document>
        <div className='lg:flex lg:flex-col lg:justify-center lg:items-center md:flex-col md:justify-center md:items-center'>
          <p className=' lg:mb-2 text-center mb-4'>
            Page {pageNumber} of {numPages}
          </p>
          <PrevNextBtns prev={goToPrevPage} next={goToNextPage} />
        </div>
      </div>
    </div>
  )
}

export default Resume
