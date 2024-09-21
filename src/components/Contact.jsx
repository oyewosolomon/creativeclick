import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Get in Touch</h2>
        <form className="max-w-md mx-auto space-y-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input type="tel" placeholder="Your Phone" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" className="w-full">Send Message</Button>
        </form>
        </div>
    </section>
  )
}

export default Contact