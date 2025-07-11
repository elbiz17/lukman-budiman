"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { useState } from "react"
import emailjs from '@emailjs/browser';

export function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState('')

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const sendEmail = async (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus('')

        try {
            // Simulasi pengiriman email (ganti dengan EmailJS)
            // await new Promise(resolve => setTimeout(resolve, 2000))
            await emailjs.send(
                'service_le2l08y',
                'template_bj6c7wl',
                {
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    // to_email: 'lukmanbudimantrue@gmail.com'
                },
                'osgGfxyOdh51Vjwzq'
            )

            setStatus('success')
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
            })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            setStatus(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Ready to bring your ideas to life? Let`s discuss your next project and create something amazing together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Let`s Connect</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-slate-600 dark:text-slate-300">lukmanbudimantrue@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <p className="text-slate-600 dark:text-slate-300">+62 823-1023-8276</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Location</p>
                                        <p className="text-slate-600 dark:text-slate-300">Kuningan, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <Button size="icon" variant="outline" className="rounded-full"
                                    onClick={() => window.open("https://github.com/elbiz17", "_blank")}
                                >
                                    <Github className="w-5 h-5" />
                                </Button>
                                <Button size="icon" variant="outline" className="rounded-full"
                                    onClick={() => window.open("https://www.linkedin.com/in/lukman-budiman-true/", "_blank")}
                                >
                                    <Linkedin className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input
                                                id="firstName"
                                                placeholder="John"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Doe"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john.doe@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            placeholder="Project Discussion"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell me about your project..."
                                            className="min-h-[120px]"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {status === 'success' && (
                                        <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg">
                                            Message sent successfully! I`ll get back to you soon.
                                        </div>
                                    )}

                                    {status === 'error' && (
                                        <div className="p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg">
                                            Failed to send message. Please try again.
                                        </div>
                                    )}

                                    <Button onClick={sendEmail} className="w-full" size="lg" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}