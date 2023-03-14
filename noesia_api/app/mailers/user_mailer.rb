class UserMailer < ApplicationMailer
  default from: 'noesia_dev@protonmail.com'

  def welcome_email(user)
    @user = user 

    @url  = 'https://noesia.vercel.app' 

    # c'est cet appel à mail() qui permet d'envoyer l’e-mail en définissant destinataire et sujet.
    mail(to: @user.email, subject: 'Bienvenue à  Noesia !') 
  end

end