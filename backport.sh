git reset HEAD~1
rm ./backport.sh
git cherry-pick ca0a16e7d761f686562f57c46b77074115666903
echo 'Resolve conflicts and force push this branch'
