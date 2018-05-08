package sg.df.prospect.util;

  public enum EMailTemplate {
        CREATION_PROSPECT_OBJET("PROSPECT_OBJECT", "Bienvenue à la Société Générale") ,
        CREATION_PROSPECT_BODY("PROSPECT_BODY") ,
        CREATION_PROSPECT_FOOTER("PROSPECT_FOOTER") ;

        private String template ;
        private String message ;

        EMailTemplate(String template, String message) {
            this.template = template;
            this.message = message ;
        }

        EMailTemplate(String template) {
            this.template = template;
        }

        public String getTemplate() {
            return template;
        }

        public void setTemplate(String template) {
            this.template = template;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
