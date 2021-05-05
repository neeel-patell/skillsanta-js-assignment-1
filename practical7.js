function strip_tags(string) {
    return string.replace(/<[^>]*>/g, '');
}

console.log(strip_tags('<p><strong><em>SkillSanta Assignments</em></strong></p>'));