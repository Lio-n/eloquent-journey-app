# Idea App:

- Un SPA donde se implementar un Dashboard, habran dos usuarios(ó autores) y un admin.
  - Cada usuario podra crear un articulo, este solo podra editar y eliminar su propio articulo.
  - El admin podra editar y eliminar todos los articulos disponibles.

# Paginas:

## Publicas

- /
  - En la página principal se veran todos los que sean publicos disponibles.
  - Se vera info extra, tal como, Author, fecha de publicacion, cantidad de palabras, etc.
- /[article_id]
  - El cuerpo de la noticia, ademas de info extra.
- /profile/[author_id]
  - Perfil publico del autor.
    - Este debera incluir todo los articulos(publicos) publicados por el autor, ademas de info extra.
- /login
  - Para que los autores y el admin, inicien sesion.

## Privadas

- /private/dashboard/[author_id]
  - Cada autor podra ver info relacionada a su trabajo. - Tales como cantidad de publicaciones. - Publicaciones privadas y publicas. - Etc.
  <!-- - /private/dashboard/[author_id]/ -->
