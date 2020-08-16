for f in projects/sp20/*/*.png; do
  convert -- "${f}" "-quality" "70" "${f%.png}.jpg"
done