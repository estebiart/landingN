import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, FormEvent } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "aclientes@hsj.com.co",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+57 321 811 3200",
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    icon: MapPin,
    title: "Oficina",
    content: "Calle 82 No. 9-65 Oficina 502, Bogotá D.C., Colombia",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Número de WhatsApp (reemplaza con el número real)
    const phoneNumber = "573218113200"; // Formato internacional sin + ni espacios

    // Construir el mensaje de WhatsApp
    const mensaje = `*Nuevo contacto desde la web*%0A%0A` +
      `*Nombre:* ${formData.nombre} ${formData.apellido}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Teléfono:* ${formData.telefono}%0A` +
      `*Mensaje:* ${formData.mensaje}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(`https://wa.me/${phoneNumber}?text=${mensaje}`, '_blank');

    // Limpiar el formulario
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      mensaje: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 bg-[hsl(var(--nutrimax-blue-light))] relative">
      {/* Decorative stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-primary"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-6 fade-up">
          <h2 className="text-3xl md:text-4xl font-light text-foreground leading-tight">
            Hablemos de su <span className="text-primary font-bold">proyecto ganadero</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 fade-up">
            <div>
              <h3 className="text-2xl font-light text-foreground mb-8"><span className="font-semibold">Información</span> de contacto</h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-5 p-6 rounded-2xl hover:bg-white/60 transition-all duration-300 group bg-white/40"
                  >
                    <div className={`${info.bgColor} p-4 rounded-full group-hover:scale-110 transition-transform`}>
                      <info.icon className={`w-6 h-6 ${info.iconColor}`} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-lg">{info.title}</h4>
                      <p className="  leading-relaxed font-light">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-10 fade-up shadow-lg border-0 bg-white">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-foreground placeholder: /60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-foreground placeholder: /60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-foreground placeholder: /60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                  placeholder="tu@correo.com"
                />
              </div>
              
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-foreground placeholder: /60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                  placeholder="+57 300 123 4567"
                />
              </div>
              
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background text-foreground placeholder: /60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary resize-none transition-all"
                  placeholder="Cuéntanos sobre tu proyecto ganadero..."
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Enviar por WhatsApp
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
