export default function WoyofalHelperLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 mb-6">
              Plateforme d’assistance Woyofal
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Woyofal Helper
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Une solution simple pour aider les utilisateurs du système
              Woyofal à mieux comprendre, suivre et gérer leurs achats et
              consommations d’électricité prépayée.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:contact@woyofalhelper.com"
                className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-2xl font-semibold shadow-lg"
              >
                Nous contacter
              </a>

              <a
                href="#features"
                className="border border-gray-300 hover:border-orange-400 hover:text-orange-600 transition px-6 py-3 rounded-2xl font-semibold"
              >
                Découvrir
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-2xl p-5">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-bold mb-2">Suivi simplifié</h3>
                  <p className="text-sm text-gray-600">
                    Consultez facilement les informations liées à vos achats.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-5">
                  <div className="text-3xl mb-2">📊</div>
                  <h3 className="font-bold mb-2">Analyse</h3>
                  <p className="text-sm text-gray-600">
                    Visualisez vos habitudes de consommation.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-5">
                  <div className="text-3xl mb-2">🔔</div>
                  <h3 className="font-bold mb-2">Notifications</h3>
                  <p className="text-sm text-gray-600">
                    Recevez des alertes utiles et des rappels.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-5">
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className="font-bold mb-2">Accessible</h3>
                  <p className="text-sm text-gray-600">
                    Compatible mobile, tablette et ordinateur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Pourquoi utiliser Woyofal Helper ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous développons des outils numériques destinés à améliorer
              l’expérience des utilisateurs de compteurs prépayés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-3xl p-8">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4">Compréhension</h3>
              <p className="text-gray-600 leading-relaxed">
                Des informations claires pour mieux comprendre vos achats,
                consommations et crédits d’électricité.
              </p>
            </div>

            <div className="bg-orange-50 rounded-3xl p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Simplicité</h3>
              <p className="text-gray-600 leading-relaxed">
                Une interface pensée pour être rapide, légère et facile à
                utiliser.
              </p>
            </div>

            <div className="bg-orange-50 rounded-3xl p-8">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Fiabilité</h3>
              <p className="text-gray-600 leading-relaxed">
                Respect des bonnes pratiques de sécurité et de confidentialité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">À propos</h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Woyofal Helper est un projet technologique indépendant visant à créer
          des outils d’accompagnement autour de l’écosystème Woyofal.
          
          Notre objectif est de proposer une meilleure expérience utilisateur
          grâce à des fonctionnalités modernes, intuitives et accessibles.
        </p>

        <div className="mt-10 inline-flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-2xl text-sm text-gray-700">
          ℹ️ Ce projet est indépendant et n’est pas affilié officiellement à la SENELEC.
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <p className="text-gray-300 text-lg mb-8">
            Pour toute question, partenariat ou demande d’information,
            contactez-nous.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@woyofalhelper.com"
              className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-2xl font-semibold"
            >
              contact@woyofalhelper.com
            </a>

            <a
              href="https://wa.me/221770000000"
              className="border border-gray-600 hover:border-orange-400 transition px-6 py-3 rounded-2xl font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
