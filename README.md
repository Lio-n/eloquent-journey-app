# Idea App:

- Un SPA donde se implementar un Dashboard, habran un admin.
  - El admin podra:
    - Crear, editar y eliminar articulos.
    - Resetear los datos almacenados en el LocalStorage, info Mock tales como User y Articles.
    - Cambiar el color principal de la page en base a los disponibles, en la page /dashboard/settings.

# Paginas:

## Publicas

- /
  - En la página principal se veran todos los articulos publicos.
- /[article_id]
  - El cuerpo de la noticia, ademas de info extra.
- /profile/[user_id]
  - Perfil publico del autor.
    - Este debera incluir todo los articulos(publicos) publicados por el autor, ademas de info extra.
- /login
  - Para que el admin, inicien sesion.

## Privadas

- /dashboard/profile
- /dashboard/settings
- /dashboard/articles/list
- /dashboard/:article_id/edit

# En progreso...

# Useful stuff

https://javascript.plainenglish.io/new-approach-for-working-with-react-router-dom-82b7be0404b9
