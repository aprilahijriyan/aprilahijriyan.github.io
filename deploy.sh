cd web
echo "Memulai membangun web..."
quasar build
mv dist/spa ../build
cd ..
echo "Memulai deploy web..."
yarn deploy
echo "Sukses yeay!"